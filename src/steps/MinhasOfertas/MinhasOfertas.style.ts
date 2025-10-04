import styled from "styled-components";

const MinhasOfertasStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
  }

  #novaOferta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 8px 16px 8px 16px;
    border: none;
    border-radius: 20px;
    background-color: #1E90FF;
    color: white;
  }

  h3 {
    font-size: 16px;
    color: #6B7280;
  }

  hr {
    width: 100vw;
    color: #EAEAEA;
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

    input {
      border: none;
      width: 100%;
      height: 100%;

      &:focus {
        outline: none;
      }
    }
  }

  .blue {
    width: 18px;
    height: 18px;
    color: #1E90FF !important;
  }

 .select-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;

    select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      border: none;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 600;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }

  .pesquisa {
    width: 244px;
    height: 38px;
  }

  .filtro {
    min-width: 100px;
    max-width: 100px;
    height: 32px;
  }

  #cardsContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 32px;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 350px;
    height: 147px;
    top: 201px;
    left: 20px;
 
    border-radius: 20px;
    border: 1px solid #D9D9D9;

    #header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #D9D9D9;
      width: 100%;
      padding: 10px;

      p {
        width: 100%;
        text-align: center;
      }
      
      img {
        width: 38px;
        height: 38px;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #data {
        font-size: 10px;
        font-weight: 500;
        color: #6B7280;
      }

      .status {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 110px;
        height: 18px;
        padding: 0px 10px 0px 10px;
        border-radius: 10px;
        font-size: 12px;

        svg {
          width: 8px;
          height: 8px;
          circle {
            width: 100%;
            height: 100%;
          }
        }
      }

      #EmUtilizacao {
        background-color: #C1D8EE;
        circle {
          fill: #1E90FF;
        }
      }

      #Ativa {
         background-color: #D1FAE5;
        circle {
          fill: #10B981;
        }
      }

      #Inativo {
        background-color: #F9F9F9;
        circle {
          fill: #8F8F8F;
        }
      }

      #Smiles {
        font-weight: 700;
        font-size: 16px;
        color: #F57921;
      }
      #TudoAzul {
        font-weight: 700;
        font-size: 16px;
        color: #40B6E6;
      }
    }

    #infos {
      table {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        padding: 10px;

        tr {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          font-size: 12px;
        }
      }
    }
  }
`

export default MinhasOfertasStyled;