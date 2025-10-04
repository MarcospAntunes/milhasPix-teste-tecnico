import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const FormDataContext = createContext({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FormDataProvider = ({children}: any) => {
  const [error, setError] = useState<boolean>(false);
  const [programa, setPrograma] = useState("TudoAzul");
  const [produto, setProduto] = useState("");
  const [milhasOfertadas, setMilhasOFertadas] = useState(0);
  const [prazoReceber, setPrazoReceber] = useState("imediato");
  const [valorMilha, setValorMilha] = useState("");
  const [cpf, setCpf] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  
  return(
    <FormDataContext.Provider 
      value={{
        error, 
        setError, 
        programa, 
        setPrograma, 
        produto, 
        setProduto, 
        milhasOfertadas, 
        setMilhasOFertadas, 
        prazoReceber, 
        setPrazoReceber, 
        valorMilha, 
        setValorMilha,
        cpf,
        setCpf,
        login,
        setLogin,
        senha,
        setSenha,
        telefone,
        setTelefone
      }}
    >
      {children}
    </FormDataContext.Provider>
  )
}
