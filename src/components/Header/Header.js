import React from 'react';
import './Header.scss';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';

const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;