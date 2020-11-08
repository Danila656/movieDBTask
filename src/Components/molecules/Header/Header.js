import React from 'react';
import './Header.css';
import Logo from '../../atoms/Logo/Logo';
import MyFavorite from '../../atoms/MyAccountButton/MyFavorite';

const Header = () => {
    return (
        <div className="header">
            <Logo/>
            <MyFavorite/>
        </div>
    )

};

export default Header;
