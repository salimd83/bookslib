import { Field, Message, Button } from "../ui";

function AuthorForm({ error, loading, onSubmit, author, setAuthor }) {
  const handleChange = (e) => {
    setAuthor({
      ...author,
      [e.target.name]: e.target.value,
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
        <input type="file" name="photo" id="author-photo" />
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
