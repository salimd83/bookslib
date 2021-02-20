import { Field, Message, Button } from "../ui/core";
import profileImg from "../profile-placeholder.png";
import {getBase64URL} from '../functions/imageFn';

function AuthorForm({ error, loading, onSubmit, author, setAuthor }) {
  const handleChange = (e) => {
    setAuthor({
      ...author,
      [e.target.name]: e.target.value,
    });
  };

  const handleFile = async (e) => {
    const base64URL = await getBase64URL(e.target.files[0]);
    setAuthor({
      ...author,
      photo: base64URL
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <Field labelText="Name">
        <input
          type="text"
          name="name"
          id="author-name"
          onChange={handleChange}
          value={author.name}
        />
      </Field>
      <Field labelText="Photo">
        <div>
          <figure>
            <img src={author.photo == '' ? profileImg : author.photo} width="120" alt="" />
          </figure>
          <input
            type="file"
            onChange={handleFile}
            name="photo"
            accept="image/*"
            id="author-photo"
          />
        </div>
      </Field>
      <Field labelText="Name">
        <textarea
          name="description"
          id="author-description"
          rows="5"
          onChange={handleChange}
          value={author.description}
        />
      </Field>
      <Message text={error} type="error" />
      <Button loading={loading} type="submit">
        Add
      </Button>
    </form>
  );
}

export default AuthorForm;
