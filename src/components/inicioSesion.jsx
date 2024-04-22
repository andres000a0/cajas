import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import Image from "../img/logoVaquita.png";
import axios from "axios";
import "../styles/inicioSession.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faShop,
} from "@fortawesome/free-solid-svg-icons";

const Inicio = () => {
  const [input, setInput] = useState({
    usuario: "",
    contraseña: "",
    options: null,
  });
  const [mensaje, setMensaje] = useState("");
  const [cargar, setCargar] = useState(false);

  const { usuario, contraseña, options } = input;
  const navigate = useNavigate();

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

const onSubmit = async (e) => {
  e.preventDefault();
  if (usuario !== "" && contraseña !== "" && options !== "") {
    const Usuario = {
      usuario,
      contraseña,
      selector: options.value,
    };
    setCargar(true);

    // Realiza la validación de la sede
    const sedeCorrecta = validarSede(options.value);

    if (!sedeCorrecta) {
      setMensaje("La sede seleccionada no es la correcta.");
      setCargar(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        Usuario
      );
      setMensaje(response.data.mensaje);
      setInput({ usuario: "", contraseña: "", options: "" });
      setTimeout(() => {
        setMensaje("");
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      setMensaje("Hubo un error: " + error.message);
      setTimeout(() => {
        setMensaje("");
        navigate("");
      }, 1500);
    }
  }
};

const validarSede = (sedeSeleccionada) => {
  // Aquí deberías realizar la validación con la sede en la base de datos
  // Por simplicidad, aquí se asume que la sede correcta es '001'
  return sedeSeleccionada === "001";
};


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
    <div className="container">
      <div className="formContainer">
      <h2>Compensación cajas</h2>
      <div className="logovaq">
        <img className="logo-vq" src={Image} alt="logo" />
      </div>

      <h3>¡Inicia Sesión!</h3>
      <form onSubmit={onSubmit}>
        <div className="inputContainer">
          <div className="left">
            <label htmlFor="usuario">Usuario</label>
            <input
              onChange={onChange}
              name="usuario"
              id="usuario"
              type="text"
              value={usuario}
              placeholder="Usuario..."
              autoComplete="off"
            />
          </div>
          <FontAwesomeIcon icon={faUser} />
        </div>

        <div className="inputContainer">
          <div className="left">
            <label htmlFor="contraseña">Contraseña</label>
            <input
              onChange={onChange}
              name="contraseña"
              id="contraseña"
              type="password"
              value={contraseña}
              placeholder="Contraseña..."
              autoComplete="off"
            />
          </div>
          <FontAwesomeIcon icon={faLock} />
        </div>
        <div className="inputContainer">
          <div className="left">
            <Select
              options={optiones}
              className="opcion-select"
              placeholder="Selecciona la sede..."
              value={options}
              onChange={(selectedOption) =>
                setInput({ ...input, options: selectedOption })
              }
            />
          </div>
          <FontAwesomeIcon icon={faShop} />
        </div>
        {/* <p className="forget-password">
          Recupera tu contraseña{" "}
          <b onClick={() => navigate("/Registro")}>Aquí!</b>
        </p> */}
        <button type="submit">
          {cargar ? "Cargando..." : "Inicia Sesión"}
        </button>
        <p>
          ¿Aún no tienes cuenta?{" "}
          <b onClick={() => navigate("/Registrate")}>Regístrate!</b>
        </p>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
    </div>
  );
};

export { Inicio };
