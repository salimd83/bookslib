import { useState } from "react";
import styled, { css } from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  width: 300px;
  height: 200px;
  border: #ccc 2px dashed;
  margin: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${({ dragEnter }) =>
    dragEnter &&
    css`
      border-color: #666;
    `}
`;

function Dropbox({onFiles}) {
  const [dragEnter, setDragEnter] = useState(false);
  const handleFiles = (e) => {
    console.log(e.target.files);
    onFiles(e.target.files);
  };
  const handleDragEnter = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setDragEnter(true);
  };
  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setDragEnter(true);
  };
  const handleDragLeave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setDragEnter(false);
  };
  const handleDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onFiles(e.dataTransfer.files);
  };
  return (
    <div className="bropbox">
      <StyledLabel
        dragEnter={dragEnter}
        htmlFor="images-upload"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        Drop image here
      </StyledLabel>
      <input
        onChange={handleFiles}
        multiple
        type="file"
        name="images-upload"
        id="images-upload"
        className="visually-hidden"
      />
    </div>
  );
}

export default Dropbox;
