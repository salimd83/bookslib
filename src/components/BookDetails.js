import { useEffect, useReducer } from "react";
import firebase from "firebase/app";
import {
  useParams,
  useRouteMatch,
  Route,
  Switch
} from "react-router-dom";
import { Loading } from "../ui";
import BookGeneral from "./book-details/BookGeneral";
import BookAuthors from "./book-details/BookAuthors";
import BookPhotos from "./book-details/BookPhotos";
import BookMenu from "./book-details/BookMenu";

const initialState = null;

function reducer(state, action) {
  switch (action.type) {
    case 'addAuthor':
      return {...state, authors: [...(state.authors || []), action.author]}
    case 'removeAuthor':
      return {...state, authors: [...state.authors.filter(author => author.name !== action.name)]}
    case 'setBook':
      return {...action.book}
    default:
      throw new Error('Unknown action.')
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
        bookDispatch({type: 'setBook', book: doc.data()});
      } catch (e) {
        console.error(e);
      }
    })();
  }, [id]);

  return (
    <div>
      <h2>Books Details</h2>
      <BookMenu url={match.url} />
      {book ? (
        <Switch>
          <Route path={`${match.path}`} exact>
            <BookGeneral book={book} id={id} />
          </Route>
          <Route path={`${match.path}/authors`}>
            <BookAuthors book={book} id={id} dispatch={bookDispatch} />
          </Route>
          <Route path={`${match.path}/photos`}>
            <BookPhotos book={book} />
          </Route>
        </Switch>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default BookDetails;
