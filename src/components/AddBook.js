import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import { Button } from "../ui/core";
import Modal from "../ui/Modal";
import { ToasterContext } from "../ui/ToasterContext";
import BookForm from "./BookForm";

function AddBook(props) {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [error, setError] = useState(null);

  const bookObj = {
    title: "",
    pages: "",
    publishDate: "",
  };

  const [book, setBook] = useState({...bookObj});

  const onSubmit = async (addToast, e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const docRef = await firebase
        .firestore()
        .collection("books")
        .add({
          ...book,
          pages: parseInt(book.pages),
          publishDate: new Date(book.publishDate),
        });
      // setBook({...bookObj});
      // setIsModal(false);
      addToast({ text: "Successfully created a new book", type: "success" });
      // redirect to book details
      history.push(`/book/${docRef.id}`);
    } catch (e) {
      console.error("An error has occured: ", error);
      setError("An error occured while trying to save the book");
      setLoading(false);
    }
  };

  const modalShow = (v) => setIsModal(v);

  return (
    <ToasterContext.Consumer>
      {({ addToast }) => (
        <div {...props}>
          <div>
            <Button onClick={modalShow.bind(this, true)} outline>
              Add Product
            </Button>
          </div>
          <Modal
            title="Add new Book"
            show={isModal}
            close={modalShow.bind(this, false)}
          >
            <BookForm
              {...{ loading, book, setBook, error }}
              onSubmit={onSubmit.bind(this, addToast)}
            />
          </Modal>
        </div>
      )}
    </ToasterContext.Consumer>
  );
}

export default AddBook;
