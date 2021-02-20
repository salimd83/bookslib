import { useState } from "react";
import firebase from "firebase/app";
import { ToasterContext } from "../ui/toasterCtx/ToasterContext";
import BookForm from "./BookForm";

function EditBook(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [book, setBook] = useState({
    title: props.book.title,
    pages: props.book.pages,
    publishDate: props.book.publishDate.toDate().toISOString().slice(0,10),
  });

  const onSubmit = async (addToast, e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await firebase
        .firestore()
        .collection("books")
        .doc(props.id)
        .set({
          ...book,
          pages: parseInt(book.pages),
          publishDate: new Date(book.publishDate),
        }, {merge: true});
      addToast({ text: "Successfully updated the book", type: "success" });
    } catch (e) {
      console.error("An error has occured: ", error);
      setError("An error occured while trying to update the book");
    }
    setLoading(false);
  };

  return (
    <ToasterContext.Consumer>
      {({ addToast }) => (
        <BookForm
          {...{ loading, book, setBook, error }}
          onSubmit={onSubmit.bind(this, addToast)}
        />
      )}
    </ToasterContext.Consumer>
  );
}

export default EditBook;
