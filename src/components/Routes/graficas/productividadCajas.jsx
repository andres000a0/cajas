import React from "react";
import { Bar, Line } from "react-chartjs-2";
import '../../../styles/graficasContent.scss';

const ProductividadCajaChart = () => {
  // Datos de ejemplo para la gráfica de productividad por registros
  const dataProductividad = {
    labels: ["Caja 1", "Caja 2", "Caja 3", "Caja 4", "Caja 5", "Caja 6", "Caja 7", "Caja 8", "Caja 9", "Caja 10"],
    datasets: [
      {
        label: "Productividad por Registros",
        data: [150, 200, 180, 220, 190, 210, 170, 230, 200, 190],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Datos de ejemplo para la gráfica de tiempo de inactividad
  const dataInactividad = {
    labels: ["Caja 1", "Caja 2", "Caja 3", "Caja 4", "Caja 5", "Caja 6", "Caja 7", "Caja 8", "Caja 9", "Caja 10"],
    datasets: [
      {
        label: "Tiempo de Inactividad (minutos)",
        data: [30, 45, 20, 60, 35, 40, 25, 50, 30, 40],
        fill: false,
        borderColor: "rgba(255, 99, 132, 0.8)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="grafics-item">
      <div className="grafics">
        <h2>Productividad por Registros</h2>
        <Bar data={dataProductividad} />
      </div>
      <div className="grafics">
        <h2>Tiempo de Inactividad de las Cajas</h2>
        <Line data={dataInactividad} />
      </div>
    </div>
  );
};

export default ProductividadCajaChart;
