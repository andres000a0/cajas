import axios from "axios";
import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import Image from "../img/logoVaquita.png";
import "../styles/registro.modulo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faShop,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";

const Registro = () => {
  const options = [
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
  const cargos = [
    { value: "01", label: "Gestion Humana" },
    { value: "02", label: "Administrador" },
    { value: "03", label: "Lider De Cajas" },
    { value: "04", label: "IsControl" },
  ];

  const [formData, setFormData] = useState({
    usuario: "",
    contraseña: "",
    confirmarContraseña: "",
    cargo: null,
    sede: null
  });

  const [registroExitoso, setRegistroExitoso] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChange = (selectedOption, name) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: selectedOption
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { usuario, contraseña, confirmarContraseña, cargo, sede } = formData;
    if (
      usuario !== "" &&
      contraseña !== "" &&
      confirmarContraseña !== "" &&
      contraseña === confirmarContraseña && 
      cargo !== null &&
      sede !== null
    ) {
      const Usuario = {
        usuario: usuario,
        contraseña: contraseña,
        cargo: cargo.value,
        sede: sede.value,
      };
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users",
          Usuario
        );
        console.log(response.data.mensaje);
        setRegistroExitoso(true);
        setFormData({
          usuario: "",
          contraseña: "",
          cargo: null,
          sede: null,
        });
        setTimeout(() => {
          setRegistroExitoso(false);
          navigate("/");
        }, 1500);
        
      } catch (error) {
        console.error("Error al enviar la solicitud:", error);
      }
    }
  };

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="formContainer-register">
        <div className="logovaq">
          <img className="logo-vq" src={Image} alt="logo" />
        </div>

        <h3>¡Regístrate!</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputContainer-register">
            <div className="left-register">
              <label htmlFor="usuario">Usuario</label>
              <input
                name="usuario"
                id="usuario"
                type="text"
                placeholder="Usuario..."
                autoComplete="off"
                value={formData.usuario}
                onChange={handleChange}
              />
            </div>
            <FontAwesomeIcon icon={faUser}/>
          </div>

          <div className="inputContainer-register">
            <div className="left-register">
              <label htmlFor="contraseña">Contraseña</label>
              <input
                name="contraseña"
                id="contraseña"
                type="password"
                placeholder="Contraseña..."
                autoComplete="off"
                value={formData.contraseña}
                onChange={handleChange}
              />
            </div>
            <FontAwesomeIcon icon={faLock}/>
          </div>
          <div className="inputContainer-register">
            <div className="left-register">
              <label htmlFor="confirmarContraseña">Confirmar Contraseña</label>
              <input
                name="confirmarContraseña"
                id="confirmarContraseña"
                type="password"
                placeholder="Confirma Contraseña..."
                autoComplete="off"
                value={formData.confirmarContraseña}
                onChange={handleChange}
              />
            </div>
            <FontAwesomeIcon icon={faLock}/>
          </div>
          <div className="inputContainer-register">
            <div className="left-register">
              <Select
                options={cargos}
                className="opcion-select"
                placeholder="Selecciona el cargo..."
                value={formData.cargo}
                onChange={(selectedOption) =>
                  handleSelectChange(selectedOption, "cargo")
                }
              />
            </div>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <div className="inputContainer-register">
            <div className="left-register">
              <Select
                options={options}
                className="opcion-select"
                placeholder="Selecciona la sede..."
                value={formData.sede}
                onChange={(selectedOption) =>
                  handleSelectChange(selectedOption, "sede")
                }
              />
            </div>
            <FontAwesomeIcon icon={faShop} />
          </div>
          <button type="submit" >Registrarme</button>
          <p className="login">
            ¿Ya tienes cuenta?{" "}
            <b onClick={() => navigate("/")}>¡Inicia Sesión!</b>
          </p>
          {registroExitoso && <p>¡Registro exitoso!</p>}
        </form>
      </div>
    </div>
  );
};

export default Registro;
