import React, { useState } from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import styles from "../styles/sidebar.module.css";
import Image from "../img/logoVaquita.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faUser,
  faRankingStar,
  //faUserPlus,
  faUsers,
  faIndent,
  faBox,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";



const Sidebar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login"); // Actualiza el estado para indicar que el usuario ha cerrado sesión
  };

  return (
    <div className={styles.dashboardContainer}>
      <div>
      <div className={styles.logo} onClick={() => navigate("/dashboard")}>
        <img className={styles.img} src={Image} alt="logo" />
        <span className={styles.itemSpan}>Compensación Cajas</span>
      </div>
      <div className={styles.menu}>
        
      <NavLink
          to="/dashboard"
          className={styles.item_link}
          title="Compensación"
        >
          <FontAwesomeIcon icon={faIndent} />
          <span className={styles.navItem}>Dashboard</span>
        </NavLink>
        <NavLink
          to="/compensacion"
          className={styles.item_link}
          title="Compensación"
        >
          <FontAwesomeIcon icon={faRankingStar} />
          <span className={styles.navItem}>Compensación</span>
        </NavLink>
        <NavLink
          to="/registrosCaja"
          className={styles.item_link}
          title="Registros por Cajas"
          onClick={() => navigate("/registrosCaja ")}
        >
          <FontAwesomeIcon icon={faBox} />
          <span className={styles.navItem}>Registros por Cajas</span>
        </NavLink>
        <NavLink
          to="/productividadCajas"
          className={styles.item_link}
          onClick={() => navigate("/productividadCajas")}
          title="Participación"
        >
          <FontAwesomeIcon icon={faUsers} />
          <span className={styles.navItem}>Productividad Por Caja</span>
        </NavLink>
        {/* <NavLink
          to="/registros"
          className={styles.item_link}
          onClick={() => navigate("/registros")}
          title="Clientes Atendidos"
        >
          <FontAwesomeIcon icon={faUser} />
          <span className={styles.navItem}>Clientes Atendidos</span>
        </NavLink>
        <NavLink
          to="/registros"
          className={styles.item_link}
          onClick={() => navigate("/registros")}
          title="Productividad"
        >
          <FontAwesomeIcon icon={faUserPlus} />
          <span className={styles.navItem}>Productividad</span>
        </NavLink> */}
        {isLoggedIn ? (
        <NavLink className={styles.item_link} title="Cerrar Sesión" onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span className={styles.navItem}>Cerrar Sesión</span>
        </NavLink>
        ): null}
      </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
