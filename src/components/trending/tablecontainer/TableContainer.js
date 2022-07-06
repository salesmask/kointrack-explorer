import React from 'react';
import './TableContainer.css';
import TrendingTableTabs from './trendingtabletabs/TrendingTableTabs';

const TableContainer = () => {
    return (
        <>
            <div className="table__container my-5 container-fluid px-0">
                <div className="row mx-0 border border-danger h-100">
                    <div className="col-11 px-0 mx-auto border border-danger h-100">
                        <TrendingTableTabs />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableContainer;
