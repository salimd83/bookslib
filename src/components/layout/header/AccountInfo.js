import styled from "styled-components";

const StyledDiv = styled.div`
    h6, p {
        margin: 0;
    }
    p {
        margin-top: 4px;
        font-weight: normal;
        color: var(--color-lightgray);
    }
`;

const AccountInfo = ({user}) => {
    return (
      <StyledDiv>
        <h6>Storelord Account</h6>
        <p>{user.email}</p>
        {user.displayName && <p>{user.displayName}</p>}
      </StyledDiv>
    )
  }

  export default AccountInfo;