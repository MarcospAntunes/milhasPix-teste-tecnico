/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoLockClosedOutline } from "react-icons/io5";
import { useCurrentStep, useFormData } from "../../hooks";
import DadosProgramaStyled from "./DadosPrograma.style";
import { BsPersonCircle } from "react-icons/bs";
import { LuMinus } from "react-icons/lu";
import { RiWhatsappFill } from "react-icons/ri";
import { GiBrazilFlag } from "react-icons/gi";

function DadosPrograma() {
  const { setStep }: any = useCurrentStep();
  const { 
    programa, 
    cpf, 
    setCpf, 
    login, 
    setLogin, 
    senha, 
    setSenha,
    telefone,
    setTelefone,
    error,
    setError
  }: any = useFormData();

  const formatCpf = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  const formatTelefone = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{0})(\d)/, "$1($2")
    .replace(/(\d{2})(\d)/, "$1)$2")
    .replace(/(\d{5})(\d{1,5})$/, "$1-$2");
  };

  if(cpf.length === 14 && login.length > 0 && senha.length > 0 && telefone.length === 14) {
    setError(false)
  } else {
    setError(true);
  }
  
  setStep(3)
  return(
    <DadosProgramaStyled>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend id="title">
            <p><span>03.</span> Dados do programa</p>
            <img src={`/images/${programa}.png`} alt={programa} />
          </legend>
          {error ? 
            <p className="messageError">Certifique-se de preencher todos os campos</p> 
            : 
            <></>
          }
          <div className="container">
            <label htmlFor="cpfTitular">CPF do Titular</label>
            <div className="box">
              <input 
                type="text" 
                value={cpf} 
                onChange={(e) => setCpf(formatCpf(e.target.value))}
                maxLength={14}
                required
              />
              <button><BsPersonCircle className="blue"/></button>
            </div>
          </div>
          <div className="container">
            <label htmlFor="login">Login de acesso</label>
            <div className="box">
              <input 
                type="text" 
                value={login} 
                onChange={(e) => setLogin(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="container">
            <label htmlFor="senha">Senha de acesso</label>
            <div className="box">
              <input 
                type="password" 
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <button><IoLockClosedOutline className="blue"/></button>
            </div>
          </div>
          <div className="container">
            <label htmlFor="senha">Telefone para autenticação</label>
            <div className="box">
              <span id="countryCode">+55 <GiBrazilFlag /></span>
              <input
                type="text" 
                value={telefone}
                onChange={(e) => setTelefone(formatTelefone(e.target.value))}
                maxLength={14}
                required
              />
              <button><RiWhatsappFill  className="whatsapp"/></button>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <h4>Dados da conta <LuMinus /></h4>
            <p>Por favor, insira os dados da conta que deseja cadastrar e verifique se estão corretos.</p>
          </legend>
        </fieldset>
      </form>
    </DadosProgramaStyled>
  )

}

export default DadosPrograma;