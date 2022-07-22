import React from 'react';
import './SpotLightTableWrapper.css';
import SpotLightGainers from './spotlightcards/SpotLightGainers';
import SpotLightLoosers from './spotlightcards/SpotLightLoosers';
import SpotLightTrending from './spotlightcards/SpotLightTrending';
import SpotLightMostVisited from './spotlightcards/SpotLightMostVisited';
import SpotLightRecentlyAdded from './spotlightcards/SpotLightRecentlyAdded';

const SpotLightTableWrapper = () => {
    return (
        <>
            <section className="highlights w-100 py-5 mb-5 bg-white">
                <div class="container-fluid px-0 py-4">
                    <div class="row mx-auto px-0 ">
                        <div className="col-12 mx-auto px-0 ">
                            <div className="container-xxl px-0 spotlight__table--wrapper">
                                {/* uhuu */}

                                <div className="col">
                                    <SpotLightTrending />
                                </div>

                                <div className="col">
                                    <SpotLightGainers />
                                </div>

                                <div className="col">
                                    <SpotLightLoosers />
                                </div>

                                <div className="col">
                                    <SpotLightMostVisited />
                                </div>

                                <div className="col">
                                    <SpotLightRecentlyAdded />
                                </div>

                                {/* uhuu */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SpotLightTableWrapper;
