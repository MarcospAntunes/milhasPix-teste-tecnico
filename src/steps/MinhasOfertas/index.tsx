/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import MinhasOfertasStyled from "./MinhasOfertas.style";
import { useEffect, useState } from "react";
import { apiSimulateOffers } from "../../services/api";

function MinhasOfertas() {
  const navigate = useNavigate();
  const [data, setData] = useState<[object]>([{}]);

  const handleNavigate = () => {
    navigate("/")
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await apiSimulateOffers();
      setData(res.offers);
    }

    fetchData();
  }, [])

  const formatDate = (data: string) => {
    const dateFormated = new Date(data).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    })

    return dateFormated
  }

  return (
    <MinhasOfertasStyled>
      <div>
        <h3>Minhas ofertas</h3>
        <button onClick={handleNavigate} id="novaOferta"><FaPlus /> Nova Oferta</button>
      </div>
      <hr />
      <div className="filtroContainer">
        <div>
          <div className="box pesquisa">
            <input type="text" placeholder="Login de acesso, ID da oferta" id="pesquisa"/>
            <CiSearch className="blue" />
          </div>
        </div>
        <div className="box filtro">
          <div className="select-wrapper">
            <select name="filtro" id="filtro">
              <option value="">Filtros</option>
            </select>
          </div>
          <IoIosArrowDown className="blue"/>
        </div>
      </div>
      <div id="cardsContainer">
        {data?.length > 0 && data.map(({accountLogin, availableQuantity, createdAt, loyaltyProgram, offerId, offerStatus, offerType}: any) => (
          <div key={offerId} className="card">
            <div id="header">
              <img src={`public/loyaltyProgramIcons/${loyaltyProgram}.png`} alt={loyaltyProgram} />
              <p><span id={loyaltyProgram}>{loyaltyProgram}</span> {offerType}</p>
              <div>
                <p className="status" id={offerStatus?.replace(" ", "")}>
                  <svg width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="4" cy="4" r="4" fill="#000" />
                  </svg>
                  {offerStatus}
                </p>
                <p id="data">{formatDate(createdAt)}</p>
              </div>
            </div>
            <div id="infos">
              <table>
                <tr>
                  <th>ID da oferta</th>
                  <td>{offerId}</td>
                </tr>
                <tr>
                  <th>Login</th>
                  <td>{accountLogin}</td>
                </tr>
                <tr>
                  <th>Milhas ofertadas</th>
                  <td>{availableQuantity}</td>
                </tr>
              </table>
            </div>
          </div>
        ))}
      </div>
    </MinhasOfertasStyled>
  )
}

export default MinhasOfertas;