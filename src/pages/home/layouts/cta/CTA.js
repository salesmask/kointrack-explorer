import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
    return (
        <>
            <div className="container-fluid cta__outer--wrapper my-5 px-0">
                <div className="row my-5 mx-0">
                    <div className="col-11 mx-auto px-0">
                        <div className="container-xxl cta__inner--subwrapper px-0">
                            <div className="cta__inner--wrapper w-75 w-md-75  d-flex flex-column justify-content-center align-items-start">
                                <h1 className="mb-4 heading">
                                    Start Earning Today
                                </h1>
                                <p className="text-wrap">
                                    Buy, sell & trade digital assets with
                                    amazing ease, confidence and trust.
                                </p>

                                {/* Route need to change */}

                                <Link
                                    to="/home"
                                    className="cta__button rounded-pill px-5 py-2 mt-4"
                                    role="button"
                                >
                                    Sign up now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CTA;
