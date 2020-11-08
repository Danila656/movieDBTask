import React from 'react';
import './Header.css';
import Logo from '../../atoms/Logo/Logo';
import MyAccountButton from '../../atoms/MyAccountButton/MyAccountButton';

const Header = () => {
    return (
        <div className="header">
            <Logo/>
            <MyAccountButton/>
        </div>
    )

};

export default Header;
