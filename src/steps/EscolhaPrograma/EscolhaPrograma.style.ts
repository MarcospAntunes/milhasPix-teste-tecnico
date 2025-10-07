import styled from "styled-components";

const EscolhaProgramaStyled = styled.section`
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
  height: 100%;
  max-width: 1216px;

  .selecionePrograma {
    display: none;
  }

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

    .select-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 100%;

      select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: none;
        border-radius: 6px;
        width: 100%;

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

  .choiceButton {
    display: none;
  }

  @media screen and (min-width: 541px) {
    form {
      flex-direction: row;
      flex-wrap: wrap;
      height: auto;

      fieldset {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }

      fieldset:nth-of-type(2), fieldset:nth-of-type(3) {
        display: none;
      }

      .container {
        max-width: 300px;
      }
    }

    .selecionePrograma {
      display: flex;
      flex-direction: column;
      gap: 16px;
      border: 1px solid #F0F0F0;
      max-width: 248px;
      max-height: 120px;
      border-radius: 8px;
      padding: 10px;
      
      p {
        font-size: 12px;
        color: #475569;
      }
    }

    .box:nth-of-type(2) {
      border: none;
    }

    .choiceButton {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 143px;
    height: 44px;
    padding: 12px 8px;
    border-radius: 56px;
    cursor: pointer;
    transition: all 0.2s;
    user-select: none;
    background-color: #f9f9f9;
    border: 2px solid transparent;
  }

   .choiceButton img {
      width: 61px;
      height: 26px;
   }

   .choiceButton:last-of-type img:last-of-type {
    width: 99px;
    height: 18px;
   }

  .choiceButton input {
    display: none;
  }

  .choiceButton input:checked{
    border: 2px solid #1E90FF;
    border-radius: 56px;
    padding: 4px;
  }

  .choiceButton:has(input:checked) {
    border: 2px solid #1E90FF;
  }


    fieldset:first-of-type > .box:first-of-type {
      display: none;
    }
  }
`;


export default EscolhaProgramaStyled;