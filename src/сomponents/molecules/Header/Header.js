import React from 'react';
import styles from './Header.module.scss';
import Logo from '../../atoms/Logo/Logo';
import MyFavorite from '../../atoms/MyAccountButton/MyFavorite';

const Header = () => (
    <div className={styles.header}>
        <Logo/>
        <MyFavorite/>
    </div>
);

export default Header;
