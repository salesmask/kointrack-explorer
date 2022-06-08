import React from 'react';
import Gainers from './gainers/Gainers';
import './Highlights.css';
import RecentlyAdded from './recently-added/RecentlyAdded';
import Trending from './trending/Trending';

const Highlights = () => {
    return (
        <section className="highlights">
            <div className="highlights__wrapper">
                <Trending />
                <Gainers />
                <RecentlyAdded />
            </div>
        </section>
    );
};

export default Highlights;
