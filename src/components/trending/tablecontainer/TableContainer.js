import React from 'react';
import './TableContainer.css';
import TrendingTable from './trendingtable/TrendingTable';
import TrendingTableTabs from './trendingtabletabs/TrendingTableTabs';

const TableContainer = () => {
    return (
        <>
            <div className="table__container my-5 container-fluid px-0">
                <div className="row mx-0 ">
                    <div className="col-11 px-0 mx-auto">
                        <TrendingTableTabs />
                        <TrendingTable />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableContainer;
