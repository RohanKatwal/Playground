const { ApolloServer, gql } = require('apollo-server');

// 1. Define GraphQL schema (type definitions)
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

// 2. Some fake in-memory data
let books = [
  { id: "1", title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: "2", title: "1984", author: "George Orwell" }
];

// 3. Define resolvers (functions that fetch data)
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

// 4. Create Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// 5. Start server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});


// Get all books
// graphql
// Copy
// Edit
// query {
//   books {
//     id
//     title
//     author
//   }
// }
// Get one book
// graphql
// Copy
// Edit
// query {
//   book(id: "1") {
//     title
//     author
//   }
// }
// Add a new book
// graphql
// Copy
// Edit
// mutation {
//   addBook(title: "Clean Code", author: "Robert C. Martin") {
//     id
//     title
//   }
// }