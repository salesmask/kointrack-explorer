import React from 'react';
import Header from '../header/Header';
import './Home.css';
import Table from './Table/Table';
import Highlights from './highlights/Highlights';
import './Home.css';
import Search from './search/Search';
import Footer from '../footer/Footer';
import CarouselPannel from '../header/CarouselPannel';
// import Banner from './banner/Banner';

const Home = () => {
    return (
        <div>
            <div>
                <Header />
                <CarouselPannel />
                {/* <Banner /> */}
            </div>

            <Search />
            <Highlights />
            <Table />
            <Footer />
        </div>
    );
};

export default Home;
