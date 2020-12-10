function BookList({ books }) {
  return (
    <div className="book-list">
      <h2>Book list</h2>
      {books.map((book) => (
        <div className="book-item" key={book.id}>
          <h4>{book.title}</h4>
          <span>
            <strong>Pages: </strong> {book.pages}
          </span>{" "}
          <span>
            <strong>Publishing Date: </strong>{" "}
            {book.publishDate.toDate().toDateString()}
          </span>
        </div>
      ))}
    </div>
  );
}

export default BookList;