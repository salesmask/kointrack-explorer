import React from 'react';
import ExchangeTable from '../ExchangeTable/ExchangeTable';
import ExchangeTabs from '../ExchangeTabs/ExchangeTabs';

const ExchangeContainer = () => {
    return (
        <>
            <div className="table__container my-5 container-fluid px-0">
                <div className="row mx-0 ">
                    <div className="col-11 px-0 mx-auto">
                        <div className="container-xxl px-0">
                            <ExchangeTabs />
                            <ExchangeTable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExchangeContainer;
