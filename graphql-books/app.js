const express = require('express');
const path = require('path');
const axios = require('axios');
const { ApolloServer, gql } = require('apollo-server-express');

// 1. GraphQL schema
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
  }
`;

// 2. In-memory data
let books = [
  { id: "1", title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: "2", title: "1984", author: "George Orwell" }
];

// 3. Resolvers
const resolvers = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find(book => book.id === id)
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = { id: String(books.length + 1), title, author };
      books.push(newBook);
      return newBook;
    }
  }
};

async function startServer() {
  const app = express();

  // Set EJS
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));

  // Apollo middleware
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  // Middleware to parse form data
  app.use(express.urlencoded({ extended: true }));

  // Route: Display all books
  app.get('/', async (req, res) => {
    const response = await axios.post('http://localhost:4000/graphql', {
      query: `{ books { id title author } }`
    });
    res.render('index', { books: response.data.data.books });
  });

  // Route: Add a new book
  app.post('/add', async (req, res) => {
    const { title, author } = req.body;
    await axios.post('http://localhost:4000/graphql', {
      query: `mutation { addBook(title: "${title}", author: "${author}") { id } }`
    });
    res.redirect('/');
  });

  app.listen(4000, () => {
    console.log(`🚀 Server running on http://localhost:4000`);
    console.log(`GraphQL endpoint at http://localhost:4000${apolloServer.graphqlPath}`);
  });
}

startServer();
