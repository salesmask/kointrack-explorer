import React from 'react';
import './Highlights.css';
import './HighlightCards.css';

import Gainers from './gainers/Gainers';
import RecentlyAdded from './recently-added/RecentlyAdded';
import Trending from './trending/Trending';

const Highlights = () => {
    return (
        <section className="highlights">
            <div className="highlights__wrapper ">
                <div class="container-fluid">
                    <div class="row mx-auto px-0 d-flex flex-column d-lg-flex flex-lg-row d-md-flex flex-md-column d-sm-flex flex-sm-column container-fluid">
                        <div class="highlights__individual--col col mb-4">
                            <Trending />
                        </div>
                        <div class="highlights__individual--col col mb-4">
                            <Gainers />
                        </div>
                        <div class="highlights__individual--col col mb-4">
                            <RecentlyAdded />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;
