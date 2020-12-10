import { useState } from "react";
import firebase from "firebase/app";
import { Button, Message, Field, Modal } from "../ui";

function BookForm({ book, setBook }) {
  const db = firebase.firestore();
  const [loading, setLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const docRef = await db.collection("books").add({
        ...book,
        pages: parseInt(book.pages),
        publishDate: new Date(book.publishDate),
      });
      console.log(docRef.id);
      setBook({
        title: "",
        pages: "",
        publishDate: "",
      });
      setIsModal(false);
    } catch (e) {
      console.error("An error has occured: ", error);
      setError("An error occured while trying to save the book");
    }
    setLoading(false);
  };

  const onChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const modalShow = (v) => setIsModal(v);

  return (
    <>
      <div>
        <button onClick={modalShow.bind(this, true)}>Add Book</button>
      </div>
      <Modal
        title="Add new Book"
        show={isModal}
        close={modalShow.bind(this, false)}
      >
        <form onSubmit={onSubmit}>
          <Field labelText="Title" id="book-title">
            <input
              type="text"
              value={book.title}
              onChange={onChange}
              name="title"
              id="book-title"
            />
          </Field>
          <Field labelText="Number of pages" id="book-pages">
            <input
              type="number"
              value={book.pages}
              onChange={onChange}
              name="pages"
              id="book-pages"
            />
          </Field>
          <Field labelText="Date of publishing" id="book-publish-date">
            <input
              type="date"
              value={book.publishDate}
              onChange={onChange}
              name="publishDate"
              id="book-publish-date"
            />
          </Field>
          <div>
            <Button loading={loading} label="Save" type="submit" />
          </div>
          <Message error={error} type="error" />
        </form>
      </Modal>
    </>
  );
}

export default BookForm;
