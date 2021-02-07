import { useState, useEffect } from "react";
import firebase from "firebase/app";
import BookItem from '../components/BookItem';
import {Loading} from '../ui';
import Layout from '../components/layout/Layout';
import AddBook from "../components/AddBook";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

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
    <Layout className="book-list">
      <AddBook />
      <h2>Book list</h2>
      {!books.length ? <Loading /> : books.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
    </Layout>
  );
}

export default BookList;