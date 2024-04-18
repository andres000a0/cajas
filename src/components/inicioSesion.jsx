import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import Image from "../img/logoVaquita.png";
import axios from "axios";
import "../styles/inicioSession.css";

const Inicio = () => {
  const [input, setInput] = useState({
    usuario: "",
    contraseña: "",
    options: "",
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
        selector: options.value, // Corregido aquí
      };
      setCargar(true);
      try {
        const response = await axios.post(
          "http://localhost:3000/registro",
          Usuario
        );
        setMensaje(response.data.mensaje);
        setInput({ usuario: "", contraseña: "", options: "" });
        setTimeout(() => {
          setMensaje("");
          navigate("/");
        }, 1500);
      } catch (error) {
        console.error("Error al enviar la solicitud:", error);
        setMensaje("Hubo un error: " + error.message);
        setTimeout(() => {
          setMensaje("");
          navigate("");
        }, 1500);
      }
      setCargar(false);
    }
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
          </svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z" />
          </svg>
        </div>
        <p className="forget-password">
          Recupera tu contraseña{" "}
          <b onClick={() => navigate("/Registro")}>Aquí!</b>
        </p>
        <button type="submit">
          {cargar ? "Cargando..." : "Inicia Sesión"}
        </button>
        <p>
          ¿Aún no tienes cuenta?{" "}
          <b onClick={() => navigate("/Registro")}>Regístrate!</b>
        </p>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
    </div>
  );
};

export { Inicio };
