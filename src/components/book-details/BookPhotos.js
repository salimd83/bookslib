import { useState } from "react";
import firebase from "firebase/app";
import { DropBox, Divider, ImgProgress, Gallery } from "../../ui";
import { getBase64URL, resizeImg } from "../../functions/imageFn";

function BookPhotos({ book, id, dispatch }) {
  const [imgs, setImgs] = useState([]);
  const onFiles = async (files) => {
    for (let i = 0; i < files.length; i++) {
      try {
        const base64URL = await getBase64URL(files[i]);
        setImgs((imgs) => [...imgs, { url: base64URL, percent: 0 }]);
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
            let percent =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(percent);
            setImgs((imgs) =>
              imgs.map((img, j) => (j === i ? { url: img.url, percent } : img))
            );
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
            setTimeout(
              () => setImgs((imgs) => imgs.filter((img, j) => j === i)),
              800
            );
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
        console.log(e);
      }
    }
  };

  const deletePhoto = (imgURL) => {
    return new Promise(async (resolve, reject) => {
      try {
        await firebase.storage().refFromURL(imgURL).delete();
        await firebase.firestore().collection('books').doc(id).update({
          photos: firebase.firestore.FieldValue.arrayRemove(imgURL)
        });
        dispatch({type: 'removePhoto', photo: imgURL});
        resolve();
      } catch (e) {
        reject(e)
      }
    })
  }
  return (
    <>
      <h3>Book photos</h3>
      {book.photos && book.photos.length ? (
        <Gallery imgs={book.photos} deletePhoto={deletePhoto} />
      ) : (
        <p>No photo available</p>
      )}

      <Divider />

      <DropBox onFiles={onFiles} />

      {imgs.map((img) => (
        <ImgProgress key={img.url} imgURL={img.url} percent={img.percent} />
      ))}
    </>
  );
}

export default BookPhotos;
