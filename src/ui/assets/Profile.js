import styled from "styled-components";

const StyledSVG = styled.svg`
  .a {
    fill: none;
    stroke: #444;
    stroke-miterlimit: 10;
    stroke-width: 40px;
  }
`;

function Profile() {
  return (
    <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 474.73 481.75">
      <title>Profile</title>
      <circle className="a" cx="237.37" cy="137.3" r="122.3" />
      <path
        className="a"
        d="M78.15,538.46c0-122.81,99.56-222.37,222.37-222.37s222.36,99.56,222.36,222.37"
        transform="translate(-63.15 -56.71)"
      />
    </StyledSVG>
  );
}

export default Profile;
