import Registro from "./components/Registrer.jsx";
import { Inicio } from "./components/inicioSesion.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Compensacion from "./components/Routes/compesacion.module.jsx";
import Productividad from "./components/Routes/productivida.module.jsx";
import Registros from "./components/Routes/registrosCajas.module.jsx";
import Calendar from "./components/Routes/calendar.module.jsx";

// import Styles from './app.module.css'
import Dashboard from "./components/dashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="*" element={<Dashboard />} />
        <Route path="/compensacion" element={<Compensacion />} />
        <Route path="/productividad" element={<Productividad />} />
        <Route path="/calendar" element={<Calendar />} />


        <Route path="/registros" element={<Registros />} />
        

      </Routes>
    </Router>
  );
}
export default App;
