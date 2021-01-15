import { useState } from "react";
import firebase from "firebase/app";
import { DropBox, Divider } from "../../ui";
import { getBase64URL, resizeImg } from "../../functions/imageFn";

function BookPhotos({ book, id, dispatch }) {
  const [imgs, setImgs] = useState([]);
  const onFiles = async (files) => {
    for (let file of files) {
      try {
        const base64URL = await getBase64URL(file);
        setImgs((imgs) => [...imgs, base64URL]);
        const blob = await resizeImg(base64URL, 2000, false);
        const imageName = `images/books/${Date.now()}.jpeg`;
        const uploadTask = firebase
          .storage()
          .ref()
          .child(imageName)
          .put(blob, { contentType: "image/jpeg" });
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
            console.log(downloadURL);
            await firebase
              .firestore()
              .collection("books")
              .doc(id)
              .update({
                photos: firebase.firestore.FieldValue.arrayUnion(downloadURL),
              });
            dispatch({ type: "addPhoto", photo: downloadURL });
          }
        );
      } catch (e) {
        console.log(e)
      }
    }
  };
  return (
    <>
      <h3>Book photos</h3>
      <p>No photo available</p>

      <Divider />

      <DropBox onFiles={onFiles} />

      {imgs.map((img) => (
        <img src={img} width="120" alt="" />
      ))}
    </>
  );
}

export default BookPhotos;
