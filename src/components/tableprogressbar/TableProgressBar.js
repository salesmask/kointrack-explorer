import React from 'react';
import './TableProgressBar.css';

const TableProgressBar = () => {
    return (
        <>
            <progress
                className="table-progress-bar"
                max="100"
                value="70"
            >
                70%
            </progress>
        </>
    );
};

export default TableProgressBar;
