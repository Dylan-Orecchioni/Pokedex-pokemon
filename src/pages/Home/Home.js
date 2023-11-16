import React from 'react';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import './Home.scss';

const Home = () => {
    return (
        <main className='home'>
            <Header />

            <div className='content'>
                <Card />
                <Card />
                <Card />
            </div>

            <Footer />
        </main>
    );
};

export default Home;