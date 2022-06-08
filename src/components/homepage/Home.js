import React from 'react';
import Highlights from './highlights/Highlights';
import './Home.css';
import Search from './search/Search';
import Footer from '../footer/Footer';

const Home = () => {
    return (
        <div>
            <Search />
            <Highlights />
            <Footer />
        </div>
    );
};

export default Home;
