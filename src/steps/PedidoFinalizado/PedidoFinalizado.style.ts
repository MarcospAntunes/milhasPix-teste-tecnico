import styled from "styled-components";

const PedidoFinalizadoStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;

  img {
    width: 60px;
    height: 61px;
  }

  h2 {
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
    color: #1E90FF;
    text-align: center;
  }

  p {
    text-align: center;
  }
`;

export default PedidoFinalizadoStyled;