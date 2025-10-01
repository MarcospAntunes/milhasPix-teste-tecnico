import styled from "styled-components";

const FooterMobileStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 72px;
  padding: 16px;
  border-top: 1px solid #E2E2E2;
  
  #backButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    
    border-radius: 100%;
    border: 1px solid #E2E2E2;

    svg {
      width: 24px;
      height: 24px;
    }
  }

   p {
     font-weight: 500;
     font-size: 18px;
     span {
      color: #1E90FF;
    }
   }
   

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding: 10px 24px 10px 24px;
    border: none;
    border-radius: 44px;
    background-color: #1E90FF;
    color: #FFFFFF;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export default FooterMobileStyled;