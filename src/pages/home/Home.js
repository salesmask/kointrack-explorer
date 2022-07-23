import React from 'react';
import Header from '../../components/header/Header';
import Table from './layouts/Table/Table';
import Highlights from './layouts/highlights/Highlights';
import Search from './layouts/search/Search';
import Footer from '../../components/footer/Footer';
import CarouselPannel from '../../components/header/CarouselPannel';

const Home = () => {
    return (
        <div>
            <div>
                <Header />
                <CarouselPannel />
            </div>

            <Search />
            <Highlights />
            <Table />
            <Footer />
        </div>
    );
};

export default Home;
