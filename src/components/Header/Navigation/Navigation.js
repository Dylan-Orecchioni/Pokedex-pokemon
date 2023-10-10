import React from 'react';
import './Navigation.scss';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {

    const location = useLocation();
    return (
        <nav className='navigation'>
            <ul>
                <Link to='/' className={location.pathname === '/' ? 'link active' : 'link'}>Accueil</Link>
                <Link to='/pokemon' className={location.pathname === '/pokemon' ? 'link active' : 'link'}>Pokemon</Link>
                <Link to='/about' className={location.pathname === '/about' ? 'link active' : 'link'}>A propos</Link>
            </ul>
        </nav>
    );
};

export default Navigation;