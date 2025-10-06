/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCurrentStep, useFormData } from "../../hooks";
import EscolhaProgramaStyled from "./EscolhaPrograma.style";
import { TbRefresh } from "react-icons/tb";
import { LuChevronsUpDown } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

function EscolhaPrograma() {
  const { setStep }: any = useCurrentStep();
  const { programa, setPrograma }: any = useFormData();
  
  setStep(1)
  return(
    <EscolhaProgramaStyled>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend><span>01.</span> Escolha o programa de fidelidade</legend>
          <div className="box">
            <div className="select-wrapper">
              <button><TbRefresh className="blue"/></button>
              <select name="programa" id="programa" onChange={(e) => setPrograma(e.currentTarget.value)}>
                <option value="TudoAzul">Tudo azul</option>
                <option value="Smiles">Smiles</option>
                <option value="LatamPass">LATAM PASS</option>
                <option value="AirPortugal">AIR PORTUGAL</option>
              </select>
            </div>
            <img src={`/images/${programa}.png`} alt={programa} />
          </div>
          <div className="container">
            <label htmlFor="produto">Produto</label>
            <div className="box">
              <div className="select-wrapper">
                <select name="produto" id="produto">
                  <option value="liminar">Liminar</option>
                </select>
              </div>
              <LuChevronsUpDown className="blue"/>
            </div>
          </div>
          <div className="container">
            <label htmlFor="cpf">CPF's Disponíveis</label>
            <div className="box disabled">
              <div className="select-wrapper">
                <select name="cpfDisponivel" id="cpfDisponivel" disabled className="disabled">
                  <option value="Ilimitado">Ilimitado</option>
                </select>
              </div>
              <IoLockClosedOutline/>
            </div>
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
      <div className="selecionePrograma">
        <h4>Selecione o programa</h4>
        <p>Escolha de qual programa de fidelidade você quer vender suas milhas. Use apenas contas em seu nome.</p>
      </div>
    </EscolhaProgramaStyled>
  )

}

export default EscolhaPrograma;