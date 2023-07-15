import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { Firestore, 
         getFirestore, 
         onSnapshot, 
         query, 
         collection, 
         orderBy,
         addDoc,
         deleteDoc,
         doc } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js';

         const firebaseConfig = {
          apiKey: "AIzaSyDrfK6O-I--qbUjENxFe4ee3roXaQeWcEw",
          authDomain: "rohanproject-bcc29.firebaseapp.com",
          projectId: "rohanproject-bcc29",
          storageBucket: "rohanproject-bcc29.appspot.com",
          messagingSenderId: "1023632147164",
          appId: "1:1023632147164:web:b6e011699b5ef252ca2a19",
          measurementId: "G-0HZQHWS8HZ"
        };
        

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);

// Get a live data snapshot (i.e. auto-refresh) of our MoviewReview collection
const q = query(collection(db, "MoviewReview"), orderBy("movie_name"));
const unsubscribe = onSnapshot(q, (snapshot) => {
  // Empty HTML table
  $('#reviewList').empty();

  // Loop through snapshot data and add to HTML table
  snapshot.forEach((doc) => {
    const reviewId = doc.id;
    const movieName = doc.data().movie_name;
    const directorName = doc.data().director_name;
    const releaseDate = doc.data().release_date;
    const movieRating = doc.data().movie_rating;

    const tableRow = `
      <tr>
        <td>${movieName}</td>
        <td>${directorName}</td>
        <td>${releaseDate}</td>
        <td>${movieRating}/5</td>
        <td>
          <button class="btn btn-danger btn-sm delete-button" data-review-id="${reviewId}">Delete</button>
        </td>
      </tr>
    `;
    $('#reviewList').append(tableRow);
  });

  // Display review count
  const reviewCount = snapshot.size;
  $('#mainTitle').html(reviewCount + " movie reviews in the list");

  // Delete button click event handler
  $('.delete-button').click(function() {
    const reviewId = $(this).data('review-id');
    deleteDoc(doc(db, "MoviewReview", reviewId));
  });
});

// Add button click event handler
$("#addButton").click(function() {
  const movieName = $("#movieName").val();
  const directorName = $("#directorName").val();
  const releaseDate = $("#releaseDate").val();
  const movieRating = parseInt($("#movieRating").val());

  // Add review to Firestore collection
  addDoc(collection(db, "MoviewReview"), {
    movie_name: movieName,
    director_name: directorName,
    release_date: releaseDate,
    movie_rating: movieRating
  });

  // Reset form
  $("#movieName").val('');
  $("#directorName").val('');
  $("#releaseDate").val('');
  $("#movieRating").val('1');
});



//display popup
let addBtn = document.querySelector('.add-btn');

addBtn.addEventListener("click", function(){
  document.querySelector('.popup').classList.toggle('active')
  if(document.querySelector('.popup').classList.contains('active')){
    document.querySelector('body').style.background = "rgba(0, 0, 0, 0.2)";
  }
  else{
    document.querySelector('body').style.background = "white";
  }
})

document.querySelector('#addButton').addEventListener('click', function() {
  document.querySelector('.popup').classList.remove('active');
  document.querySelector('body').style.background = 'none';
});

