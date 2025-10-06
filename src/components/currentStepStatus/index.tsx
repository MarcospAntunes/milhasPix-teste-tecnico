import { useLocation, useNavigate } from "react-router-dom";
import CurrentStepStatusStyled from "./CurrentStepStatus.style";

function CurrentStepStatus() {
  const location = useLocation();
  const navigate = useNavigate();

  const steps = [
    { id: 1, label: "Passo 1", desc: "Escolha a companhia aérea", path: "/" },
    { id: 2, label: "Passo 2", desc: "Oferte suas milhas", path: "/oferteMilhas" },
    { id: 3, label: "Passo 3", desc: "Insira os dados do programa", path: "/dadosPrograma" },
    { id: 4, label: "Passo 4", desc: "Pedido finalizado", path: "/pedidofinalizado" },
  ];

  const currentPath = location.pathname;
  const currentIndex = steps.findIndex((s) => s.path === currentPath);

  return (
    <CurrentStepStatusStyled>
      {steps.map((step, index) => {
        let status = "disabled";
        if (index < currentIndex) status = "checked";
        if (index === currentIndex) status = "active";

        return (
          <div
            className={`status ${status}`}
            key={step.id}
            onClick={() => navigate(step.path)}
            style={{ cursor: "pointer" }}
          >
            {/* linha acima — azul se passo anterior foi concluído */}
            {index > 0 && (
              <hr
                className={`top ${index <= currentIndex ? "blue" : ""}`}
              />
            )}

            {/* círculo */}
            <div className="circle">
              <figure className={`outerCircle ${status}`}>
                <span className={`innerCircle ${status}`}></span>
              </figure>

              {/* linha abaixo — azul se este passo já foi concluído */}
              {index < steps.length - 1 && (
                <hr
                  className={`bottom ${index < currentIndex ? "blue" : ""}`}
                />
              )}
            </div>

            {/* texto */}
            <div className={`currentStep ${status}`}>
              <h3>{step.label}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        );
      })}
    </CurrentStepStatusStyled>
  );
}

export default CurrentStepStatus;
