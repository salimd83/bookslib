import {useContext, useState} from 'react';
import firebase from 'firebase/app';
import { ToasterContext } from "../../ui/ToasterContext";
import AuthorForm from "../AuthorForm";

function BookAuthors({ book, id, dispatch }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [author, setAuthor] = useState({
    name: '',
    photo: '',
    description: ''
  })
  const {addToast} = useContext(ToasterContext);
  
  const onSubmit = async (author, e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await firebase.firestore().collection('books').doc(id).update({
        authors: firebase.firestore.FieldValue.arrayUnion(author)
      });
      addToast({text: "Author added successfully", type:"success"});
      setLoading(false);
      dispatch({type: 'addAuthor', author});
    } catch (e) {
      console.error('An error has occured while adding an author', e);
      setError('Unable to add author.');
      setLoading(false);
    }
  }
  return (
    <>
      <h3>Authors</h3>
      <div>{book.authors ? book.authors.map(author => <p key={author.name}>{author.name}</p>) : "No authors"}</div>
      <hr/>
      <div>
        <h4>Add an author</h4>
        <AuthorForm {...{loading, error, author, setAuthor}} onSubmit={onSubmit.bind(this, author)} />
      </div>
    </>
  );
}

export default BookAuthors;
