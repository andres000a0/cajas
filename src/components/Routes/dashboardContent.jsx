import React, { useEffect, useState } from "react";
import Component from "../dashboard.jsx";
import "../../styles/dashboardContent.scss";
import { Bar, Line } from "react-chartjs-2";
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
      { title: "Cajer@ Por Ventas", nombre: "Juan", registros: 150 },
      { title: "Caja Por Registro", caja: "Caja 1", registros: 200 },
      { title: "Registros Totales", total: 1000 },
      { title: "Facturas Emitidas", facturas: 50 },
    ];
    setDataCards(exampleData.slice(0,4));
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
                <h3>{card.title}</h3>
                <div className="cardContent">
                  {card.nombre && <span>Nombre: {card.nombre}</span>}
                  {card.caja && <span>Caja: {card.caja}</span>}
                  <p>{card.registros && `Registros: ${card.registros}`}</p>
                  <p>{card.total && `Total: ${card.total}`}</p>
                  <p>{card.facturas && `Facturas: ${card.facturas}`}</p>
                </div>
              </div>
            ))}
          </section>
          <section className="graficoContent">
            <div >
              <h1>hola mundo</h1>
            </div>
            <div>
              
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
