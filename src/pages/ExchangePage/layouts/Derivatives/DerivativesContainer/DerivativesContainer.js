import React from 'react';
import DerivativesTable from '../DerivativesTable/DerivativesTable';
import DerivativesTabs from '../DerivativesTabs/DerivativesTabs';

const DerivativesContainer = () => {
    return (
        <>
            <div className="table__container my-5 container-fluid px-0">
                <div className="row mx-0 ">
                    <div className="col-11 px-0 mx-auto">
                        <div className="container-xxl px-0">
                            <DerivativesTabs />
                            <DerivativesTable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DerivativesContainer;
