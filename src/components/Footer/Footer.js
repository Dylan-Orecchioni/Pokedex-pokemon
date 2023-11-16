import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className={'footer'}>
            <p>Copyright &copy; {new Date().getFullYear()} Pokedex - Pokemon, by Dylan.O></p>
        </div>
    );
};

export default Footer;