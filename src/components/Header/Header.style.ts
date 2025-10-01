import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 12px 16px;
  width: 100%;
  height: 60px;
  background-color: #1E90FF;

  img {
    width: 128px;
    height: 32px;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 64px;
    border-radius: 9999px;
    border: 1px solid #CAE6FB;
    height: 36px;
    padding: 6px 16px 6px 16px;
    color: #EAEAEA;
    font-weight: 500;
    font-size: 14px;
  }
`;

export default HeaderStyled;