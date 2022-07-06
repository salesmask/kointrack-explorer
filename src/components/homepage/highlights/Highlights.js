import React from 'react';
import './Highlights.css';
import './HighlightCards.css';

import Gainers from './gainers/Gainers';
import RecentlyAdded from './recently-added/RecentlyAdded';
import Trending from './trending/Trending';

const Highlights = () => {
    return (
        <section className="highlights w-100 py-5 mb-5">
            <div class="container-fluid px-0 py-4">
                <div class="row mx-auto px-0 ">
                    <div className="col-11 mx-auto px-0 d-flex flex-column d-lg-flex flex-lg-row d-md-flex flex-md-column d-sm-flex flex-sm-column gap-4 gap-lg-3 gap-xl-4 gap-xxl-5">
                        <div class="highlights__individual--col col ">
                            <Trending />
                        </div>
                        <div class="highlights__individual--col col">
                            <Gainers />
                        </div>
                        <div class="highlights__individual--col col">
                            <RecentlyAdded />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;
