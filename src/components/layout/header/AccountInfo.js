import styled from "styled-components";

const StyledAccountInfo = styled.div`
  h6,
  p {
    margin: 0px 0px;
  }
  p {
    margin-top: 4px;
    font-weight: normal;
    color: var(--color-lightgray);
  }
`;

function AccountInfo({ user }) {
  return (
    <StyledAccountInfo>
      <h6>Storelord Account</h6>
      <p>{user.email}</p>
      {user.displayName && `<p>${user.displayName}</p>`}
    </StyledAccountInfo>
  );
}

export default AccountInfo;
