import React from 'react';
import GainersLosersTabs from './gainersloserstabs/GainersLosersTabs';

const GainerLoserTableContainer = () => {
    return (
        <>
            <div className="table__container my-5 container-fluid px-0">
                <div className="row mx-0 ">
                    <div className="col-11 px-0 mx-auto">
                        <GainersLosersTabs />
                    </div>
                </div>
            </div>
        </>
    );
};

export default GainerLoserTableContainer;
