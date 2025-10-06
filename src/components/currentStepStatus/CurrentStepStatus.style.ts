import styled from "styled-components";

const CurrentStepStatusStyled = styled.aside`
  
  display: flex;
  flex-direction: column;
  min-height: 345px;

  .status {
    position: relative;
    display: flex;
    height: 86px;
    width: 100%;
  }

  .status.active {
    background-color: #F9F9F9;
  }

  .circle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 15px 0 15px;
  }

  .outerCircle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #F0F0F0;
    background-color: white;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .outerCircle.active {
    border: 1px solid #1E90FF;
    box-shadow: 0 0 0 3.83px #1E90FF40;
  }

  .outerCircle.checked {
    background-color: #1E90FF;
  }

  .innerCircle {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #F0F0F0;
  }

  .innerCircle.active {
    background-color: #1E90FF
  }

  .innerCircle.checked {
    background-color: white
  }

  .currentStep {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .currentStep.disabled {
    background-color: transparent;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    color: #475569;
  }

  hr {
    position: absolute;
    width: 2px;
    height: 45px;
    border: none;
    background-color: #F0F0F0;
    left: 30px;
  }

  hr.bottom {
    top: 62px;
  }

  hr.top {
    bottom: 62px;
  }
  
  hr.top,
  hr.bottom {
  width: 2px;
  border: none;
  background-color: #e0e0e0;
  margin: 0 auto;
}

  hr.top.blue,
  hr.bottom.blue {
    background-color: #007bff;
  }
`;

export default CurrentStepStatusStyled;