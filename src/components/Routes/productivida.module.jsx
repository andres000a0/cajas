import { useState } from "react";
import Select from "react-select";
import Component from "../dashboard.jsx";
import Styles from "../../styles/productividad.module.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from "dayjs";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(17284938276, "Carlos Medina", 40309, "100%", 4.0),
  createData(17284938276, "Carlos Medina", 40309, "100%", 4.0),
  createData(17284938276, "Carlos Medina", 40309, "100%", 4.0),
  createData(17284938276, "Carlos Medina", 40309, "100%", 4.0),
  createData(17284938276, "Carlos Medina", 40309, "100%", 4.0),
  createData(17284938276, "Carlos Medina", 40309, "100%", 4.0),
  createData(17284938276, "Carlos Medina", 40309, "100%", 4.0),
  createData(17284938276, "Carlos Medina", 40309, "100%", 4.0),
  createData(17284938276, "Carlos Medina", 40309, "100%", 4.0),
  createData(17284938276, "Carlos Medina", 40309, "100%", 4.0),
  createData(17284938276, "Carlos Medina", 40309, "100%", 4.0),
  createData(17284938276, "Carlos Medina", 40309, "100%", 4.0),
];

const Productividad = () => {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const exportToExcel = () => {
    // Aquí iría la lógica para exportar el reporte a Excel
    // Puedes usar librerías como exceljs o xlsx para generar el archivo Excel
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
              <h2>Cajeros</h2>
              <div className={Styles.opcionSelect}>
                <Select
                   options={optiones}
                   placeholder="Selecciona la sede..."
                   value={input.options}
                   onChange={(selectedOption) => setInput({ ...input, options: selectedOption })}
                />
              </div>
            </div>
            <div className={Styles.tableList}>
              <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Cedula</TableCell>
                      <TableCell align="center">Calories</TableCell>
                      <TableCell align="center">Fat&nbsp;(g)</TableCell>
                      <TableCell align="center">Carbs&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center" component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="center">{row.calories}</TableCell>
                        <TableCell align="center">{row.fat}</TableCell>
                        <TableCell align="center">{row.carbs}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Productividad;
