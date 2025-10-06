import styled from "styled-components";

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  width: 100%;
  height: 100%;
  padding: 0px 16px 0px 16px;

  aside {
    display: none;
  }

  @media screen and (min-width: 541px) {
    aside {
      display: flex;
    }
  }
`

export default LayoutStyled;