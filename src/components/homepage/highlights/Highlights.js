import React from 'react';
import './Highlights.css';
import './HighlightCards.css';

import Gainers from './gainers/Gainers';
import RecentlyAdded from './recently-added/RecentlyAdded';
import Trending from './trending/Trending';

const Highlights = () => {
    return (
        <section className="highlights w-100 p-4 p-sm-5">
            <div className="highlights__wrapper ">
                <div class="container-fluid">
                    <div class="row mx-auto px-0 d-flex flex-column d-lg-flex flex-lg-row d-md-flex flex-md-column d-sm-flex flex-sm-column container-fluid">
                        <div class="highlights__individual--col col mb-3 mb-sm-4 me-0 p-0 me-xl-3 me-xxl-5">
                            <Trending />
                        </div>
                        <div class="highlights__individual--col col mb-3 mb-sm-4 me-0 p-0 me-xl-3 me-xxl-5">
                            <Gainers />
                        </div>
                        <div class="highlights__individual--col col mb-3 mb-sm-4 me-0 p-0 me-xl-3 me-xxl-5">
                            <RecentlyAdded />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;
