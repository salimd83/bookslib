import { useEffect, useReducer } from "react";
import firebase from "firebase/app";
import { useParams, useRouteMatch, Route, Switch } from "react-router-dom";
import { Loading } from "../ui/core";
import BookGeneral from "../components/book-details/BookGeneral";
import BookAuthors from "../components/book-details/BookAuthors";
import BookPhotos from "../components/book-details/BookPhotos";
import BookMenu from "../components/book-details/BookMenu";
import Layout from "../components/layout/Layout";
import Page from "../components/layout/Page";

const initialState = null;

function reducer(state, action) {
  switch (action.type) {
    case "addAuthor":
      return { ...state, authors: [...(state.authors || []), action.author] };
    case "removeAuthor":
      return {
        ...state,
        authors: [
          ...state.authors.filter((author) => author.name !== action.name),
        ],
      };
    case "addPhoto":
      return { ...state, photos: [...(state.photos || []), action.photo] };
    case "removePhoto":
      return {
        ...state,
        photos: [...state.photos.filter((photo) => photo !== action.photo)],
      };
    case "setBook":
      return { ...action.book };
    default:
      throw new Error("Unknown action.");
  }
}

function BookDetails() {
  const { id } = useParams();
  const [book, bookDispatch] = useReducer(reducer, initialState);
  const match = useRouteMatch();

  useEffect(() => {
    (async () => {
      try {
        const docRef = await firebase.firestore().collection("books").doc(id);
        const doc = await docRef.get();
        bookDispatch({ type: "setBook", book: doc.data() });
      } catch (e) {
        console.error(e);
      }
    })();
  }, [id]);

  return (
    <Layout>
      <Page title="Product Details">
        <BookMenu url={match.url} />
        <div>
          {book ? (
            <Switch>
              <Route path={`${match.path}`} exact>
                <BookGeneral book={book} id={id} />
              </Route>
              <Route path={`${match.path}/authors`}>
                <BookAuthors book={book} id={id} dispatch={bookDispatch} />
              </Route>
              <Route path={`${match.path}/photos`}>
                <BookPhotos book={book} id={id} dispatch={bookDispatch} />
              </Route>
            </Switch>
          ) : (
            <Loading />
          )}
        </div>
      </Page>
    </Layout>
  );
}

export default BookDetails;
