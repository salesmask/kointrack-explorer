import React from 'react';
import MostVisitedTable from './mostvisitedtable/MostVisitedTable';
import MostVisitedTableTabs from './mostvisitedtabletabs/MostVisitedTableTabs';

const MostVisitedTableContainer = () => {
    return (
        <>
            <div className="table__container my-5 container-fluid px-0">
                <div className="row mx-0 ">
                    <div className="col-11 px-0 mx-auto">
                        <div className="container-xxl px-0">
                            <MostVisitedTableTabs />
                            <MostVisitedTable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MostVisitedTableContainer;
