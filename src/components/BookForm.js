import { Button, Message } from "../ui/core";
import Field from "../ui/Field";

function BookForm({ loading, onSubmit, book, error, setBook }) {
  const onChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <Field labelText="Title" id="book-title">
        <input
          type="text"
          value={book.title}
          onChange={onChange}
          name="title"
          id="book-title"
        />
      </Field>
      <Field labelText="Number of pages" id="book-pages">
        <input
          type="number"
          value={book.pages}
          onChange={onChange}
          name="pages"
          id="book-pages"
        />
      </Field>
      <Field labelText="Date of publishing" id="book-publish-date">
        <input
          type="date"
          value={book.publishDate}
          onChange={onChange}
          name="publishDate"
          id="book-publish-date"
        />
      </Field>
      <div>
        <Button loading={loading} type="submit">
          Save
        </Button>
      </div>
      <Message text={error} type="error" />
    </form>
  );
}

export default BookForm;
