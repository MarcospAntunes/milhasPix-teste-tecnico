/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useCurrentStep, useFormError } from "../../hooks";
import EscolhaProgramaStyled from "./OferteMilhas.style";
import { GoPlus } from "react-icons/go";
import { PiAirplaneInFlightLight } from "react-icons/pi";
import { RiArrowDownDoubleFill, RiArrowUpDoubleFill } from "react-icons/ri";
import { IoCheckmark } from "react-icons/io5";
import { apiRanking } from "../../services/api";

function OferteMilhas() {
  const { setStep }: any = useCurrentStep();
  const [selectedOption, setSelectedOption] = useState("imediato");
  const {error, setError}: any = useFormError();
  const [value, setValue] = useState("");
  const [data, setData] = useState<[object]>([{}]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyDigits = Number(e.target.value.replace(/\D/g, ""));
    const numberValue = onlyDigits / 100;
    const formatted = numberValue.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    setValue(formatted);
    
    if(numberValue < 14 || numberValue > 16.5) {
      setError(true)
      setData(await apiRanking(numberValue.toString()));
    } else {
      setError(false)
      setData(await apiRanking(numberValue.toString()));
    }
  };

  const options = [
    { label: "Imediato", value: "imediato" },
    { label: "em 2 dias", value: "2dias" },
    { label: "em 7 dias", value: "7dias" },
    { label: "Depois do voo", value: "depois" },
  ]
  
  setStep(2)
  return(
    <EscolhaProgramaStyled>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend><span>02.</span> Oferte suas milhas</legend>
          <label htmlFor="receber" id="receber">Quero receber</label>
            <div className="opcoes">
              {options.map((opcao) => (
                <label key={opcao.value} className="opcao">
                  <input
                    type="radio"
                    name="receber"
                    value={opcao.value}
                    checked={selectedOption === opcao.value}
                    onChange={() => setSelectedOption(opcao.value)}
                  />
                  <span>{opcao.label}</span>
                </label>
               ))}
            </div>
          <div className="container">
            <label htmlFor="produto">Milhas ofertadas</label>
            <div className="box">
              <input type="number" value={10000} />
              <PiAirplaneInFlightLight className="blue" />
            </div>
          </div>
          <div className="container">
            <label htmlFor="valor">Valor a cada 1.000 milhas</label>
            <div className={error ? "box error" : "box"}>
              <span>R$</span>
              <input 
                type="text"
                inputMode="numeric"
                value={value}
                onChange={(e) => handleChange(e)} 
              />
              {error ? (
                Number(value.replace(",", ".")) < 14 ? (
                  <RiArrowUpDoubleFill className="red" />
                ) : Number(value.replace(",", ".")) > 16.5 ? (
                  <RiArrowDownDoubleFill className="red" />
                ) : (
                  <IoCheckmark className="blue" />
                )
              ) : (
                <IoCheckmark className="blue" />
              )}
            </div>
            {error ? 
              <p className="messageError">Escolha entre <span>R$ 14,00</span> e <span>R$ 16,56</span></p> 
              : 
              <></>
            }
            <div className="rankingContainer">
             {data.length > 0 && data?.map(({ description, mile_value, position }: any) => {
                const numericValue = mile_value ? Number(mile_value) : 0;
                const checkPostion = (description || "").includes("essa será sua posição") ? "ranking you" : "ranking"
                if (numericValue <= 0) return null;
                return (
                  <p key={position} className={checkPostion}>
                    {checkPostion == "ranking you" ? `Você ${position}° R$ ${(numericValue * 1.025).toFixed(2)}` : `${position}° R$ ${(numericValue * 1.025).toFixed(2)}`}
                  </p>
                );
              })}
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <h4>Média de milhas <GoPlus className="blue"/></h4>
            <p>Ao vender mais de 20.000 milhas, ative as Opções Avançadas para definir a média de milhas por emissão</p>
          </legend>
        </fieldset>
      </form>
    </EscolhaProgramaStyled>
  )

}

export default OferteMilhas;