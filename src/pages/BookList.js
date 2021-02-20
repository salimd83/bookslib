import { useState, useEffect } from "react";
import firebase from "firebase/app";
import BookItem from '../components/BookItem';
import {Loading} from '../ui/core';
import AddBook from "../components/AddBook";
import Page from '../ui/Page';

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
    <Page title="Book list" className="book-list">
      <AddBook />
      <br/><br/>
      {!books.length ? <Loading /> : books.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
    </Page>
  );
}

export default BookList;