import { useState } from "react";
import Select from "react-select";
import Component from "../dashboard.jsx";
import Styles from "../../styles/productividad.module.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "chartjs-adapter-date-fns";
// import dayjs from "dayjs";
import * as React from "react";
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

const Productividad = () => {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const [input, setInput] = useState({
    usuario: "",
    contraseña: "",
    options: null,
  });

  //   const onChange = (e) => {
  //     setInput({ ...input, [e.target.name]: e.target.value });
  //   };

  const optiones = [
    { value: "001", label: "La 33" },
    { value: "002", label: "San Cristobal" },
    { value: "003", label: "Poblado" },
    { value: "004", label: "Rionegro" },
    { value: "005", label: "Sabaneta Avenida" },
    { value: "006", label: "Intermidia" },
    { value: "007", label: "Prado" },
    { value: "008", label: "Sabaneta Parque" },
    { value: "009", label: "Pedregal" },
    { value: "010", label: "San Joaquin" },
    { value: "011", label: "Floresta" },
    { value: "012", label: "San Marcos" },
    { value: "013", label: "Laureles" },
  ];

  return (
    <div className={Styles.dashboardContent}>
      <Component />
      <div className={Styles.dashboard}>
        <div>
          <h2>Productividad de Cajas</h2>
        </div>
        <div className={Styles.cards}>
          <section className={Styles.cardContainer}>
            <div className={Styles.calendar}>
              <LocalizationProvider dateAdapter={AdapterDayjs} locale="es">
                <DatePicker
                  label="Selecciona una fecha"
                  value={selectedDate1}
                  onChange={handleDateChange1}
                  renderInput={(params) => <input {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div className={Styles.calendar}>
              <LocalizationProvider
                className={Styles.calendar}
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
          <section className={Styles.table}>
            <div className={Styles.headerTable}>
              <h2>Registros por Caja</h2>
              <div className={Styles.opcionSelect}>
                <Select
                  options={optiones}
                  placeholder="Selecciona la sede..."
                  value={input.options}
                  onChange={(selectedOption) =>
                    setInput({ ...input, options: selectedOption })
                  }
                />
              </div>
            </div>
            <div className={Styles.tableList}>
              <section className={Styles.chart}>
                <Bar data={data} options={options} />
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Productividad;
