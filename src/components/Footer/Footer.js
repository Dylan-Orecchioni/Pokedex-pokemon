import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className={'footer'}>
            <p>Copyright &copy; {new Date().getFullYear()} Pokedex - Pokemon, by Dylan.O></p>
        </footer>
    );
};

export default Footer;