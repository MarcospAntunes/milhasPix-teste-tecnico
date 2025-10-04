import styled from "styled-components";

const DadosProgramaStyled = styled.section`
  form {
    display: flex;
    flex-direction: column;
    gap: 32px;
    border: 1px solid #E2E2E2;
    border-top: none;
    border-radius: 8px;
    padding: 0px 0px 10px 0px;
  }

  input {
    font-size: 14px;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    width: 100%;
    border: none;

    #title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 18px;
      }
    }

    legend {
      padding: 16px;
      border: 1px solid #E2E2E2;
      border-radius: 8px 8px 0px 0px;
      font-size: 18px;
      margin-bottom: 32px;
      text-align: center;
      width: 100%;
      
      span {
        color: #1E90FF;
      }

      h4 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-weight: 500;
        font-size: 16px;
      }

      p {
        text-align: left;
        font-weight: 400;
        font-size: 12px;
      }
    }
  }

  fieldset:not(:first-of-type) legend {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    width: 85%;
    margin-bottom: 0;

    svg {
      color: #8F8F8F;
    }
  }

  label {
    width: 85%;
    font-size: 16px;
    font-weight: 500;
  }

  .disabled {
    background-color: #F9F9F9;

    svg {
      color: #8F8F8F;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 11px;
    width: 85%;
    height: 44px;
    border: 1px solid #E2E2E2;
    border-radius: 44px;
    padding: 10px 16px;

    button {
      width: 20px;
      height: 20px;
      border: none;
      background-color: transparent;
    }

    input {
      border: none;
      width: 100%;
      height: 100%;

      &:focus {
        outline: none;
      }
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      min-width: 32px;
      height: 32px;
      border-radius: 40px;
    }
  }

  .blue {
    width: 20px;
    height: 20px;
    color: #1E90FF !important;
  }

  .red {
    width: 20px;
    height: 20px;
    color: #DC2B2B !important;
  }

  .error {
    border: 1px solid #DC2B2B;

    span {
      
      background-color: #DC2B2B1A;
      color: #DC2B2B;
    }
  }

  .messageError {
    width: 85%;
    color: #DC2B2B;

    span {
      font-weight: 700;
    }
  }

  #countryCode {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    min-width: 66px;
    height: 32px;
    border-radius: 40px;
    background-color: #F3F3F3;

    svg {
      font-size: 20px;
      width: 20px !important;
      height: 20px !important;
    }
  }

  .whatsapp {
    color: #10B981;
    width: 20px;
    height: 20px;
  }
  
`;

export default DadosProgramaStyled;