import Registrate from "./components/Registrer.jsx";
import { Inicio } from "./components/inicioSesion.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Compensacion from "./components/Routes/compesacion.jsx";
import RegistrosCajas from "./components/Routes/RegistrosCajas.jsx";
import ProductividadCajas from "./components/Routes/ProductividadCajas.jsx";
import Dashboard from "./components/Routes/dashboardContent.jsx";

// import Styles from './app.module.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Registrate" element={<Registrate />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/compensacion" element={<Compensacion />} />
        <Route path="/productividadCajas" element={<ProductividadCajas />} />
        <Route path="/registrosCaja" element={<RegistrosCajas />} />
      </Routes>
    </Router>
  );
}
export default App;
