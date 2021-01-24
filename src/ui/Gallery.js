import styled from "styled-components";
import Image from "./Image";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  > div {
      margin: 4px;
  }
`;

function Gallery({ imgs, deletePhoto }) {
  return (
    <Div>
      {imgs.map((img) => (
        <div key={img}>
          <Image img={img} deletePhoto={deletePhoto} />
        </div>
      ))}
    </Div>
  );
}

export default Gallery;
