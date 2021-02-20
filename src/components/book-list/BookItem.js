import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 700px;
  padding: 10px;
  border-bottom: rgba(0 0 0 / 5%) 1px solid;
`;

function BookItem({ book }) {
  return (
    <Item>
      <h4><Link to={`/products/${book.id}`}>{book.title}</Link></h4>
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
