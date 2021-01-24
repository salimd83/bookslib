import { useState, useContext } from "react";
import styled, { css } from "styled-components";
import { ToasterContext } from "./ToasterContext";
import IconButton from "./IconButton";

const Figure = styled.div`
  position: relative;
  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0) 30%);
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
  }
  :hover {
    div {
      opacity: 1;
    }
  }
  ${({ loading }) => {
    if (loading)
      return css`
        div {
          opacity: 1;
        }
      `;
  }}
`;

function Image({ img, deletePhoto }) {
  const [loading, setLoading] = useState(false);
  const { addToast } = useContext(ToasterContext);
  const onDelete = async () => {
    setLoading(true);
    try {
      await deletePhoto(img);
    } catch (e) {
      console.error(e);
      addToast({
        text: "An error occured while trying to delete the image.",
        type: "error",
      });
      setLoading(false);
    }
  };
  return (
    <Figure loading={loading.toString()}>
      <img src={img} height="150" alt="" />
      <div>
        <IconButton
          iconClass="fas fa-trash"
          loading={loading}
          color="white"
          onClick={onDelete}
        />
      </div>
    </Figure>
  );
}

export default Image;