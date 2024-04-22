import React, { useEffect, useState } from "react";
import Component from "../dashboard.jsx";
import "../../styles/dashboardContent.scss";
import  ProductividadCajaChart  from "./graficas/productividadCajas.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faShoppingCart,
  faReceipt,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DashboardContent = () => {
  const [dataCards, setDataCards] = useState([]);

  useEffect(() => {
    // Aquí podrías hacer una llamada a una API para obtener los datos reales y luego establecerlos en el estado
    // Por ahora, usaremos datos de ejemplo
    const exampleData = [
      {
        title: "Cajer@ Por Ventas",
        nombre: "Juan",
        registros: 150,
        icon: faAddressCard,
      },
      {
        title: "Caja Por Registro",
        caja: "Caja 1",
        registros: 200,
        icon: faShoppingCart,
      },
      { title: "Registros Totales", total: 1000, icon: faReceipt },
      { title: "Facturas Emitidas", facturas: 50, icon: faTasks },
    ];
    setDataCards(exampleData.slice(0, 4));
  }, []);

  return (
    <div className="dashboardIndex">
      <Component />
      <div className="dashboard">
        <div>
          <h2>Dasboard</h2>
        </div>
        <div className="graficos-item">
          <section className="cards">
            {dataCards.map((card, index) => (
              <div className="cardItem" key={index}>
                <div className="icon"></div>
                <div>
                  <h3>{card.title}</h3>
                  <div className="cardContent">
                    <div className="icon-item">
                      <FontAwesomeIcon icon={card.icon} />
                    </div>
                    <div>
                      {card.nombre && <span>Nombre: {card.nombre}</span>}
                      {card.caja && <span>Caja: {card.caja}</span>}
                      <p>{card.registros && `Registros: ${card.registros}`}</p>
                      <p>{card.total && `Total: ${card.total}`}</p>
                      <p>{card.facturas && `Facturas: ${card.facturas}`}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
          <section className="graficoContent">
            <div>
              <ProductividadCajaChart />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
