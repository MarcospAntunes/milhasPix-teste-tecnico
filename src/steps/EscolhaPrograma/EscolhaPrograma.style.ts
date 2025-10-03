import styled from "styled-components";

const EscolhaProgramaStyled = styled.section`
  form {
    display: flex;
    flex-direction: column;
    gap: 32px;
    border: 1px solid #E2E2E2;
    border-top: none;
    border-radius: 8px;
    padding: 0px 0px 10px 0px;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    width: 100%;
    border: none;

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

  .disabled {
    background-color: #F9F9F9;

    svg {
      color: #8F8F8F;
    }
  }

  .container {
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

    .select-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: none;
        border-radius: 6px;

        &:focus {
          outline: none;
        }
      }
    }

    img {
      width: 43px;
      height: 20px;
    }
  }

  .blue {
    width: 20px;
    height: 20px;
    color: #1E90FF !important;
  }
`;


export default EscolhaProgramaStyled;