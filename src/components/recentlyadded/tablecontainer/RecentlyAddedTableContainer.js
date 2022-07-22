import React from 'react';
import RecentlyAddedTable from './recentlyaddedtable/RecentlyAddedTable';
import RecentlyAddedTableTabs from './recentlyaddedtabletabs/RecentlyAddedTableTabs';

const RecentlyAddedTableContainer = () => {
    return (
        <>
            <div className="table__container my-5 container-fluid px-0">
                <div className="row mx-0 ">
                    <div className="col-11 px-0 mx-auto">
                        <div className="container-xxl px-0">
                            <RecentlyAddedTableTabs />
                            <RecentlyAddedTable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentlyAddedTableContainer;
