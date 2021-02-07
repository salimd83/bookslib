import styled from "styled-components";
import {Link} from 'react-router-dom';

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 700px;
  padding: 10px;
  border-bottom: rgba(0,0,0, .05) 1px solid;
`;

function BookItem({ book }) {
  return (
    <Item>
      <h5><Link to={`/books/${book.id}`}>{book.title}</Link></h5>
      <span>
        <strong>Pages: </strong> {book.pages}
      </span>{" "}
      <span>
        <strong>Publishing Date: </strong>{" "}
        {book.publishDate.toDate().toDateString()}
      </span>
    </Item>
  );
}

export default BookItem;
