import React from 'react';
import Highlights from './highlights/Highlights';
import './Home.css';
import Search from './search/Search';

const Home = () => {
    return (
        <div>
            <Search />
            <Highlights />
        </div>
    );
};

export default Home;
