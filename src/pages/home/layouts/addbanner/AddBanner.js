import React from 'react';
import './AddBanner.css';

const AddBanner = () => {
    return (
        <>
            <div className="container-fluid appdownload__outer--wrapper my-5 px-0">
                <div className="row mx-0">
                    <div className="col-11 mx-auto px-0 py-5">
                        <div className="container-xxl appdownload__inner--wrapper px-0 d-flex justify-content-end align-items-center">
                            <div className="appdownload__content--wrapper">
                                <h2 className="mb-3 mb-sm-2 mb-md-4 heading">
                                    Great features with best experience
                                </h2>
                                <p className="mb-3 mb-sm-2 mb-md-4 description">
                                    Kointrack is the easiest place to buy and
                                    sell cryptocurrency. Download app and get
                                    started today.
                                </p>
                                <h1 className="mb-3 mb-sm-2 mb-md-4 download__caption">
                                    Download Now
                                </h1>
                                <div className="download__button--wrapper">
                                    <button className="android__app me-3 me-md-5"></button>
                                    <button className="ios__app"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddBanner;
