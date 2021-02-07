import { useState, useEffect } from "react";
import firebase from "firebase/app";
import BookItem from "../components/book-list/BookItem";
import { Loading } from "../ui/core";
import AddBook from "../components/AddBook";
import Layout from "../components/layout/Layout";
import Page from "../components/layout/Page";

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
      <Page title="Products list">
      <AddBook />
      <br />
      <br />
      <div>
        {!books.length ? (
          <Loading />
        ) : (
          books.map((book) => <BookItem book={book} key={book.id} />)
        )}
      </div>
      </Page>
    </Layout>
  );
}

export default BookList;
