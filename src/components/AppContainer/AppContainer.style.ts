import styled from "styled-components";

const AppContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  gap: 32px;
  background-color: #FFFFFF;

  main {
    height: 100%;
  }

  @media screen and (min-width: 541px) {
    height: auto;
  }
`;

export default AppContainerStyled;