import React from 'react';
import Header from '../../components/header/Header';
import Table from './layouts/Table/Table';
import Highlights from './layouts/highlights/Highlights';
import Search from './layouts/search/Search';
import Footer from '../../components/footer/Footer';
import CarouselPannel from './layouts/carousel/CarouselPannel';
import CTA from './layouts/cta/CTA';
import Videos from '../../components/Videos/Videos';
import AddBanner from './layouts/addbanner/AddBanner';

const Home = () => {
    return (
        <>
            <Header />
            <CarouselPannel />
            <Search />
            <Highlights />
            <Table />
            <CTA />
            <Videos />
            <AddBanner />
            <Footer />
        </>
    );
};

export default Home;
