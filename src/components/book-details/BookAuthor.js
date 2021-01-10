import {useContext} from 'react';
import firebase from 'firebase/app';
import {ToasterContext} from '../../ui/ToasterContext';
import imgProfile from '../../profile-placeholder.png';
import {excerpt} from '../../functions/stringFn';

function Author({author, id, dispatch}) {
    const {addToast} = useContext(ToasterContext);
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            if(author.photo !== '') await firebase.storage().refFromURL(author.photo).delete();
            await firebase.firestore().collection('books').doc(id).update({
                authors: firebase.firestore.FieldValue.arrayRemove(author)
            });
            dispatch({type: 'removeAuthor', name: author.name});
            addToast({text: "Remove author successfully", type: 'success'});
        } catch (e) {
            console.log(e);
            addToast({text: 'Error deleting author', type: 'error'});
        }
    }
    return (
        <>
            <figure>
                <img src={author.photo !== '' ? author.photo : imgProfile} alt="" width="90" />
            </figure>
            <div>
                <h5>
                    {author.name}
                </h5>
                <p>{excerpt(author.description)}</p>
            </div>
            <div>
                <a href="#" onClick={handleDelete}>Delete</a>
            </div>
        </>
    )
}

export default Author