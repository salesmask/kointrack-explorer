import React from 'react';
import SpotLightTableWrapper from './spotlighttable/SpotLightTableWrapper';
import SpotLightTableTabs from './spotlighttabletabs/SpotLightTableTabs';

const SpotLightTableContainer = () => {
    return (
        <>
            <div className="table__container my-5 container-fluid px-0">
                <div className="row mx-0 ">
                    <div className="col-11 px-0 mx-auto">
                        <div className="container-xxl px-0">
                            <SpotLightTableTabs />
                            <SpotLightTableWrapper />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpotLightTableContainer;
