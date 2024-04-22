import React, { useState, useEffect } from "react";
import Component from "../dashboard.jsx";
import { Line } from "react-chartjs-2";
import "../../styles/productividadCajas.scss";

const Registros = () => {
  const [selectedCaja, setSelectedCaja] = useState(null);
  const [registrosTotales, setRegistrosTotales] = useState([]);

  const handleCajaChange = (event) => {
    setSelectedCaja(event.target.value);
    // Lógica para obtener los registros de la caja seleccionada para todo el mes
  };

  const obtenerRegistrosTotales = () => {
    // Lógica para obtener los registros totales del mes
    const registros = [{
        value: 'caja01', registrosTotales: 2901293,
    }];
    setRegistrosTotales(registros);
  };

  useEffect(() => {
    obtenerRegistrosTotales();
  }, []); // Se ejecuta solo una vez al montar el componente

  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "Registros Totales",
        data: registrosTotales,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1
      }
    ]
  };

  return (
    <div className="dashboardContent">
      <Component />
      <div className="dashboardRegister">
        <h2>Productividad Por Caja</h2>
        <div>
          <label htmlFor="cajaSelect">Selecciona una caja:</label>
          <select
            id="cajaSelect"
            value={selectedCaja}
            onChange={handleCajaChange}
          >
            <option value="caja1">Caja 1</option>
            <option value="caja2">Caja 2</option>
          </select>
        </div>

        <div>
          {/* Aquí se renderiza la gráfica */}
          <h3>Registros totales del mes</h3>
          <Line data={data} />
        </div>
      </div>
    </div>
  );
};

export default Registros;
