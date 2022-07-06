import React from 'react';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
    return (
        <div className="breadcrumb__wrapper container-fluid px-0 my-3 my-md-4 my-lg-5">
            <div className="row mx-0">
                <div className="col-11 mx-auto px-0">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="#">Cryptocurrencies</a>
                            </li>
                            <li class="breadcrumb-item">
                                <a href="#">Coins</a>
                            </li>
                            <li
                                class="breadcrumb-item active"
                                aria-current="page"
                            >
                                Bitcoin
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumbs;
