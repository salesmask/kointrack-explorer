import React from 'react';
import DexTable from '../DexTable/DexTable';
import DexTabs from '../DexTabs/DexTabs';

const DexContainer = () => {
    return (
        <>
            <div className="table__container my-5 container-fluid px-0">
                <div className="row mx-0 ">
                    <div className="col-11 px-0 mx-auto">
                        <div className="container-xxl px-0">
                            <DexTabs />
                            <DexTable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DexContainer;
