import React from 'react';
import styles from './Logo.module.scss'
import {useHistory} from "react-router-dom";

const Logo = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    };

    return (
        <span onClick={handleClick} className={styles.logo}>
            <div className={styles.art}/>
            <p className={styles.logoText}>Movies</p>
        </span>
    );
};

export default Logo;
