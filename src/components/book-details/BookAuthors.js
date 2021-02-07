import { useContext, useState } from "react";
import styled from 'styled-components';
import firebase from "firebase/app";
import {Divider} from '../../ui/core';
import { ToasterContext } from "../../ui/ToasterContext";
import AuthorForm from "./AuthorForm";
import BookAuthor from "./BookAuthor";
import { resizeImg } from '../../functions/imageFn';

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 90px auto 50px;
  gap: 20px;
  max-width: 600px;
`;

function BookAuthors({ book, id, dispatch }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [author, setAuthor] = useState({
    name: "",
    photo: "",
    description: "",
  });
  const { addToast } = useContext(ToasterContext);

  

  const onSubmit = async (author, e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const blob = await resizeImg(author.photo, 250);
      const photoName = `images/author/${Date.now()}.jpeg`;
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(photoName);
      const uploadTask = imageRef.put(blob, { contentType: "image/jpeg" });
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        (e) => {
          switch (e.code) {
            case "storage/unauthorized":
              console.error("unauthorized");
              break;
            case "storage/unknown":
              console.error(e.serverResponse);
              break;
          }
        },
        async () => {
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          await firebase
            .firestore()
            .collection("books")
            .doc(id)
            .update({
              authors: firebase.firestore.FieldValue.arrayUnion({
                ...author,
                photo: downloadURL,
              }),
            });
          addToast({ text: "Author added successfully", type: "success" });
          setLoading(false);
          dispatch({
            type: "addAuthor",
            author: { ...author, photo: downloadURL },
          });
          setAuthor({
            name: "",
            photo: "",
            description: "",
          });
        }
      );
    } catch (e) {
      console.error("An error has occured while adding an author", e);
      setError("Unable to add author.");
      setLoading(false);
    }
  };
  return (
    <>
      <h3>Authors</h3>
      <GridDiv>
        {book.authors
          ? book.authors.map((author, i) => (
              <BookAuthor key={author.name+i} {...{ author, id, dispatch }} />
            ))
          : "No authors"}
      </GridDiv>
      <Divider />
      <div>
        <h4>Add an author</h4>
        <AuthorForm
          {...{ loading, error, author, setAuthor }}
          onSubmit={onSubmit.bind(this, author)}
        />
      </div>
    </>
  );
}

export default BookAuthors;
