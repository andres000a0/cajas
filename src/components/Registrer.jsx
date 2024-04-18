import axios from "axios";
import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import Image from "../img/logoVaquita.png";
// import { FaUser, FaLock } from "react-icons/fa";
import "../styles/registro.modulo.css";

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

  // Estado para guardar los valores de los campos del formulario
  const [formData, setFormData] = useState({
    usuario: '',
    contraseña: '',
    confirmarContraseña: '',
    cargo: null,
    sede: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChange = (selectedOption, name) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: selectedOption.value
    }));
  };


  // Función para manejar el envío del formulario
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
        usuario,
        contraseña,
        sede: sede.value,
      };
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/api/users",
          Usuario
        );
        console.log(response.data.mensaje);
        setFormData({
          usuario: "",
          contraseña: "",
          confirmarContraseña: "",
          cargo: null,
          sede: null,
        });
        setTimeout(() => {
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

      <h3>!Registrate!</h3>
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
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
          <svg
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7474 23.7499C13.7488 23.7499 13.7499 23.751 13.7499 23.7524V24.9999C13.7499 25.3314 13.6182 25.6493 13.3838 25.8837C13.1494 26.1182 12.8314 26.2498 12.4999 26.2498H11.2499C10.5596 26.2498 9.99994 26.8095 9.99994 27.4998C9.99994 28.1629 9.73655 28.7988 9.26771 29.2676C8.79887 29.7364 8.16299 29.9998 7.49996 29.9998H2.49999C1.83695 29.9998 1.20107 29.7364 0.732229 29.2676C0.26339 28.7988 0 28.1629 0 27.4998V24.2674C0.000141593 23.6044 0.263625 22.9686 0.732496 22.4999L7.04801 16.1844C9.11881 14.1136 9.62828 11.0007 10.1776 8.12409C10.2709 7.63574 10.4008 7.15289 10.5674 6.67969C11.2646 4.69889 12.5678 2.98785 14.292 1.78918C16.0162 0.590515 18.074 -0.0349387 20.1736 0.00150694C22.2732 0.0379526 24.3081 0.734447 25.9897 1.99223C27.6712 3.25002 28.9142 5.00526 29.5422 7.00906C30.1703 9.01287 30.1516 11.1636 29.4889 13.1561C28.8261 15.1487 27.5528 16.8821 25.8496 18.1105C24.1465 19.3389 22.0998 19.9999 19.9999 19.9999C18.6192 19.9999 17.4974 21.1192 17.4974 22.4999C17.4974 22.8314 17.3657 23.1493 17.1313 23.3837C16.8969 23.6182 16.5789 23.7499 16.2474 23.7499H13.7474ZM22.4999 9.99994C23.1629 9.99994 23.7988 9.73655 24.2676 9.26771C24.7365 8.79888 24.9999 8.16299 24.9999 7.49996C24.9999 6.83692 24.7365 6.20104 24.2676 5.7322C23.7988 5.26336 23.1629 4.99997 22.4999 4.99997C21.8368 4.99997 21.201 5.26336 20.7321 5.7322C20.2633 6.20104 19.9999 6.83692 19.9999 7.49996C19.9999 8.16299 20.2633 8.79888 20.7321 9.26771C21.201 9.73655 21.8368 9.99994 22.4999 9.99994Z"
              fill="black"
            />
          </svg>
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
          <svg
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7474 23.7499C13.7488 23.7499 13.7499 23.751 13.7499 23.7524V24.9999C13.7499 25.3314 13.6182 25.6493 13.3838 25.8837C13.1494 26.1182 12.8314 26.2498 12.4999 26.2498H11.2499C10.5596 26.2498 9.99994 26.8095 9.99994 27.4998C9.99994 28.1629 9.73655 28.7988 9.26771 29.2676C8.79887 29.7364 8.16299 29.9998 7.49996 29.9998H2.49999C1.83695 29.9998 1.20107 29.7364 0.732229 29.2676C0.26339 28.7988 0 28.1629 0 27.4998V24.2674C0.000141593 23.6044 0.263625 22.9686 0.732496 22.4999L7.04801 16.1844C9.11881 14.1136 9.62828 11.0007 10.1776 8.12409C10.2709 7.63574 10.4008 7.15289 10.5674 6.67969C11.2646 4.69889 12.5678 2.98785 14.292 1.78918C16.0162 0.590515 18.074 -0.0349387 20.1736 0.00150694C22.2732 0.0379526 24.3081 0.734447 25.9897 1.99223C27.6712 3.25002 28.9142 5.00526 29.5422 7.00906C30.1703 9.01287 30.1516 11.1636 29.4889 13.1561C28.8261 15.1487 27.5528 16.8821 25.8496 18.1105C24.1465 19.3389 22.0998 19.9999 19.9999 19.9999C18.6192 19.9999 17.4974 21.1192 17.4974 22.4999C17.4974 22.8314 17.3657 23.1493 17.1313 23.3837C16.8969 23.6182 16.5789 23.7499 16.2474 23.7499H13.7474ZM22.4999 9.99994C23.1629 9.99994 23.7988 9.73655 24.2676 9.26771C24.7365 8.79888 24.9999 8.16299 24.9999 7.49996C24.9999 6.83692 24.7365 6.20104 24.2676 5.7322C23.7988 5.26336 23.1629 4.99997 22.4999 4.99997C21.8368 4.99997 21.201 5.26336 20.7321 5.7322C20.2633 6.20104 19.9999 6.83692 19.9999 7.49996C19.9999 8.16299 20.2633 8.79888 20.7321 9.26771C21.201 9.73655 21.8368 9.99994 22.4999 9.99994Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="inputContainer-register">
          <div className="left-register">
            <Select
              options={cargos}
              className="opcion-select"
              placeholder="Selecciona la cargo..."
              value={formData.cargo}
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "cargo")
              }
            />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
          </svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z" />
          </svg>
        </div>
        <button type="submit" >Registrarme</button>
        <p className="login">
          Ya tienes cuenta?{" "}
          <b onClick={() => navigate("/Inicio")}>Inicia Sesión!</b>
        </p>
      </form>
    </div>

    </div>
  );
};

export default Registro;
