import { useState, useEffect } from "react";
import firebase from "firebase/app";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import './styles.css';

function App() {
  const db = firebase.firestore();

  const [book, setBook] = useState({
    title: "",
    pages: "",
    publishDate: "",
  });
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const snapshot = await db.collection("books").get();
      const booksArray = [];
      snapshot.forEach((doc) => {
        booksArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setBooks(booksArray);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Books library</h1>
      
      <BookForm book={book} setBook={setBook} />

      <BookList books={books} />
    </div>
  );
}

export default App;
