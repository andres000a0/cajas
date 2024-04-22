import React, { useState } from "react";
import Component from "../dashboard.jsx";
import  "../../styles/registrosCajas.scss";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "chartjs-adapter-date-fns";
// import dayjs from "dayjs";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ["Caja 01", "Caja 02", "Caja 03", "Caja 04", "Caja 05", "Caja 06"],
  datasets: [
    {
      label: "Registros por aja",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      padding: 10,
      data: [30922, 17280, 19428, 12232, 16284, 12456],
    },
  ],
};
const options = {
  responsive: true,
  animation: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 50000,
      ticks: { color: "rgba(0, 220, 195)", paddingLeft: 5,},
    },
    x: {
      ticks: { color: "rgba(0, 220, 195)" },
    },
  },
};

const RegistrosCajas = () => {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };



  return (
    <div className="dashboardContent">
      <Component />
      <div className="dashboard">
        <div>
          <h2>Registros Por Cajas</h2>
        </div>
        <div className="cards">
          <section className="cardContainer">
            <div className="calendar">
              <LocalizationProvider dateAdapter={AdapterDayjs} locale="es">
                <DatePicker
                  label="Selecciona una fecha"
                  value={selectedDate1}
                  onChange={handleDateChange1}
                  renderInput={(params) => <input {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div className="calendar">
              <LocalizationProvider
                className="calendar"
                dateAdapter={AdapterDayjs}
                locale="es"
              >
                <DatePicker
                  label="Selecciona una fecha"
                  value={selectedDate2}
                  onChange={handleDateChange2}
                  renderInput={(params) => <input {...params} />}
                />
              </LocalizationProvider>
            </div>

            <button>Buscar</button>
          </section>
          <section className="table">
            <div className="headerTable">
              <h2>Registros por Caja</h2>
            </div>
            <div className="tableList">
              <section className="chart">
                <Bar data={data} options={options} />
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RegistrosCajas;
