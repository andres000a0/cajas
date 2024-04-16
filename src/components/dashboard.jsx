import React from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import styles from "../styles/dashboard.module.css";
import Image from "../img/logoVaquita.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChartSimple,
  faRankingStar,
  faUserPlus,
  faUsers,
  faBox,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.logo}>
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
          <FontAwesomeIcon icon={faChartSimple} />
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
        <NavLink
          to="/registros"
          className={styles.item_link}
          onClick={() => navigate("/registros")}
          title="Registros por Cajas"
        >
          <FontAwesomeIcon icon={faBox} />
          <span className={styles.navItem}>Registros por Cajas</span>
        </NavLink>

        <NavLink className={styles.item_link} title="Cerrar Sesión">
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span className={styles.navItem}>Cerrar Sesión</span>
        </NavLink>
      </div>
      {/* <nav>
        <ul>
          <li >
            <NavLink to="/" className={styles.tatle}>
              <img className={styles.logo} src={Image} alt="logo" />
              <span className="name-dashboard">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/compensacion" className={styles.item_link}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z" />
              </svg>
              <span className="nav-items">Compensación</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/productividad" className={styles.item_link}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 
                48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432
                c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 
                96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 
                0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"
                />
              </svg>
              <span className="nav-items">Productividad Cajas</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/registros"
              className={styles.item_link}
              onClick={() => navigate("/registros")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
              <span className="nav-items">Registros por cajas</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.item_link}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
              </svg>
              <span className="nav-items">Cerrar Sesión</span>
            </NavLink>
          </li>
        </ul>
      </nav> */}
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
