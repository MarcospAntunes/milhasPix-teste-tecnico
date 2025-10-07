import styled from "styled-components";

const OferteMilhasStyled = styled.section`
  form {
    display: flex;
    flex-direction: column;
    gap: 32px;
    border: 1px solid #E2E2E2;
    border-top: none;
    border-radius: 8px;
    padding: 0px 0px 10px 0px;
  }

  .errorTitleContainer {
    display: none;
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

  #green {
      font-size: 14px;
      color: #12A19A;
      width: 85%;
      
      span {
        font-weight: 700;
      }
    }

  .opcoes {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      font-family: sans-serif;
      width: 100%;
    }

    .opcao {
      width: auto;
      position: relative;
    }

    .opcao input {
      display: none;
    }

    .opcao span {
      display: inline-block;
      padding: 12px 8px 12px 8px;
      border: 2px solid #ccc;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 14px;
      color: #333;
      width: 134px;
      height: 44px;
      text-align: center;
    }


    .opcao input:checked + span {
      border-color: #1E90FF;
      font-weight: 500;
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

  .rankingContainer {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    width: 85%;
  }
  
  .ranking {
    display: flex;
    align-items: center;
    height: 24px;
    border: 1px solid #E2E2E2;
    border-radius: 44px;
    padding: 0px 9px 0px 9px;
    color: #1E90FF;
    font-size: 12px;
  }

  .ranking.you {
    color: #12A19A;
    background-color: #12A19A1A;
    border-color: #12A19A;
  }

  #mediaMilhas {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 298px;
  }

  .toggle {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 24px;
  } 

  .toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #ccc;
    border-radius: 34px;
    transition: background-color 0.3s;
  }

  .slider::before {
    content: "";
    position: absolute;
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s;
  }

  .toggle input:checked + .slider {
    background-color: #2196F3;
  }

  .toggle input:checked + .slider::before {
    transform: translateX(15px);
  }

  .milhas {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .mediaMilhasDestkop, #mediaMilhasDesktopButton {
    display: none;
  }

  @media screen and (min-width: 541px) {
    form {
      flex-wrap: wrap;
      max-width: 640px;
      height: 480px;  
        

      fieldset {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }

      .titleMobile {
        display: none;
      }

      .errorTitleContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      .errorTitleContainer p:first-of-type {
        font-size: 18px;
        font-weight: 500;
      }

      .errorTitleContainer .messageError {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        width: auto;
        border-radius: 40px;
        padding: 0px 16px 0px 16px;
        height: 30px;
        background-color: #DC2B2B1A;

        span {
          color: #DC2B2B;
          font-weight: 700;
        }
      }

      fieldset:nth-of-type(2), fieldset:nth-of-type(3) {
        display: none;
      }

      .container {
        max-width: 300px;
      }
    }

    .messageError {
      display: none;
    }

    .milhas {
      flex-direction: row;
    }

    #mediaMilhas {
      display: none;
    }

    #mediaMilhasDestkopButton {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 12px;
      width: 85%;
    }

    .mediaMilhasDestkop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 11px;
      
      height: 44px;
      border: 1px solid #E2E2E2;
      border-radius: 44px;
      padding: 10px 16px;
      }

      #mediaMilhasDestkopContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
      }

    .mediaMilhasMobile {
      display: none !important;
    }
  }

`;


export default OferteMilhasStyled;