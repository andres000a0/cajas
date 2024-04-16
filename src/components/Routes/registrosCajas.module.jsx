import React from 'react';
import Component from '../dashboard.jsx';
import Styles from '../../styles/compensacion.module.css';

const  Registros = () => {
    
    return (
        <div className={Styles.dashboardContent}>
            <Component />
            <div>
                <h1> hola mundo REggistros</h1>
                <h1> hola mundos</h1>
            </div>
        </div>
    )
};

export default Registros;