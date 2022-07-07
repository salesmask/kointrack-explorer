import React from 'react';
import './GainerLoserTableContainer.css';
import Gainers from './gainers/Gainers';
import GainersLosersTabs from './gainersloserstabs/GainersLosersTabs';
import Losers from './losers/Losers';

const GainerLoserTableContainer = () => {
    return (
        <>
            <div className="table__container my-5 container-fluid px-0">
                <div className="row mx-0 ">
                    <div className="col-11 px-0 mx-auto">
                        <GainersLosersTabs />
                        <div className="gainersloserstable__outer--wrapper my-5">
                            <Gainers />
                            <Losers />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GainerLoserTableContainer;
