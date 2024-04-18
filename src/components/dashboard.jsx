import React from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import styles from "../styles/sidebar.module.css";
import Image from "../img/logoVaquita.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRankingStar,
  faUserPlus,
  faUsers,
  faBox,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";



const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.dashboardContainer}>
      <div>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img className={styles.img} src={Image} alt="logo" />
        <span className={styles.itemSpan}>Compensación Cajas</span>
      </div>
      <div className={styles.menu}>
        <NavLink
          to="/compensacion"
          className={styles.item_link}
          title="Compensación"
        >
          <FontAwesomeIcon icon={faRankingStar} />
          <span className={styles.navItem}>Compensación</span>
        </NavLink>
        <NavLink
          to="/productividad"
          className={styles.item_link}
          title="Productividad Cajas"
        >
          <FontAwesomeIcon icon={faBox} />
          <span className={styles.navItem}>Productividad Cajas</span>
        </NavLink>
        <NavLink
          to="/registros"
          className={styles.item_link}
          onClick={() => navigate("/registros")}
          title="Participación"
        >
          <FontAwesomeIcon icon={faUsers} />
          <span className={styles.navItem}>Participación</span>
        </NavLink>
        <NavLink
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
        </NavLink>

        <NavLink className={styles.item_link} title="Cerrar Sesión">
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span className={styles.navItem}>Cerrar Sesión</span>
        </NavLink>
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
