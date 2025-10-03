/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useCurrentStep } from "../../hooks";
import EscolhaProgramaStyled from "./EscolhaPrograma.style";
import { TbRefresh } from "react-icons/tb";
import { LuChevronsUpDown } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

function EscolhaPrograma() {
  const { setStep }: any = useCurrentStep();
  const [currentOption, setCurrentOption] = useState("TudoAzul");
  
  setStep(1)
  return(
    <EscolhaProgramaStyled>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend><span>01.</span> Escolha o programa de fidelidade</legend>
          <div className="container">
            <div className="select-wrapper">
              <button><TbRefresh className="blue"/></button>
              <select name="programa" id="programa" onChange={(e) => setCurrentOption(e.currentTarget.value)}>
                <option value="TudoAzul">Tudo azul</option>
                <option value="Smiles">Smiles</option>
                <option value="LatamPass">LATAM PASS</option>
                <option value="AirPortugal">AIR PORTUGAL</option>
              </select>
            </div>
            <img src={`/images/${currentOption}.png`} alt={currentOption} />
          </div>
          <div className="container">
            <div className="select-wrapper">
              <select name="produto" id="produto">
                <option value="liminar">Liminar</option>
              </select>
            </div>
            <LuChevronsUpDown className="blue"/>
          </div>
          <div className="container disabled">
            <div className="select-wrapper">
              <select name="cpfDisponivel" id="cpfDisponivel" disabled className="disabled">
                <option value="Ilimitado">Ilimitado</option>
              </select>
            </div>
            <IoLockClosedOutline className="blue"/>
          </div>
        </fieldset>
        <fieldset>
          <legend><h4>Selecione o programa <GoPlus className="blue"/></h4></legend>
        </fieldset>
        <fieldset>
          <legend>
            <h4>Selecione o programa <LuMinus /></h4>
            <p>Escolha de qual programa de fidelidade você quer vender suas milhas. Use apenas contas em seu nome.</p>
          </legend>
        </fieldset>
      </form>
    </EscolhaProgramaStyled>
  )

}

export default EscolhaPrograma;