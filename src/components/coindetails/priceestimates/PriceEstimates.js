import React from 'react';
import './PriceEstimates.css';
import Customer_Logo from './../../../assets/detailspage/cards/Group 9162.svg';
import Beta_Logo from './../../../assets/detailspage/cards/Group 9126.svg';

const PriceEstimates = () => {
    return (
        <div className="container-fluid  px-0">
            <div className="row  mx-0">
                <div className="col-11 d-block  mx-auto px-0">
                    <div className="container-xxl px-0">
                        {/* Head section price estimates*/}
                        <div className="price-estimates-layout ">
                            <div className="header___logo">
                                <p className="price_heading">
                                    {' '}
                                    Social Bitcoin Price Estimates
                                    <span>
                                        <img
                                            src={Beta_Logo}
                                            className="beta_logo"
                                        />
                                    </span>
                                </p>
                            </div>
                            <p className="price_paragraph">
                                This feature is in beta testing. Place your
                                estimates for next 6 months and see what other’s
                                are thinking about it. Data displayed are based
                                on user input compiled by CoinMarketCap. The
                                cut-off for estimates for each month-end is on
                                the 21st of each month.
                            </p>
                        </div>

                        {/* Wrapper for cards */}

                        <div className=" container-fluid d-flex gx-3 gap-5 px-0 mx-0 flex-wrap ">
                            <div class=" col-11 col-xl col-md-5 border first_card_price_estimate ">
                                <div class="card-header ">
                                    <img
                                        src={Customer_Logo}
                                        className="customer_logo"
                                    />
                                    <span className="customer_vote">
                                        35,057 voted
                                    </span>

                                    <span className="login_date float-end ">
                                        29/05/2022
                                    </span>
                                </div>
                                <div class="card-body gap">
                                    <div>
                                        <h6 class="card-title ">
                                            Place your estimate
                                        </h6>
                                        <p class="card-text color">
                                            Atleast to see how others estimate
                                        </p>
                                    </div>

                                    <a
                                        href="#"
                                        class="btn btn-primary rounded-pill button_manual"
                                    >
                                        Submit Estimate
                                    </a>
                                </div>
                            </div>

                            <div class="col-11 col-xl col-md-5 border first_card_price_estimate  ">
                                <div class="card-header">
                                    <img
                                        src={Customer_Logo}
                                        className="customer_logo"
                                    />
                                    <span className="customer_vote">
                                        35,057 voted
                                    </span>{' '}
                                    <span className="login_date float-end ">
                                        29/05/2022
                                    </span>
                                </div>
                                <div class="card-body gap ">
                                    <div>
                                        <h5 class="card-title">
                                            Place your estimate
                                        </h5>
                                        <p class="card-text color">
                                            Atleast to see how others estimate
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        class="btn btn-primary rounded-pill button_manual"
                                    >
                                        Submit Estimate
                                    </a>
                                </div>
                            </div>

                            <div class="col-11 col-xl col-md-5  border first_card_price_estimate ">
                                <div class="card-header">
                                    <img
                                        src={Customer_Logo}
                                        className="customer_logo"
                                    />
                                    <span className="customer_vote">
                                        35,057 voted
                                    </span>{' '}
                                    <span className="login_date float-end  ">
                                        29/05/2022
                                    </span>
                                </div>
                                <div class="card-body gap">
                                    <div>
                                        <h5 class="card-title">
                                            Place your estimate
                                        </h5>
                                        <p class="card-text color">
                                            Atleast to see how others estimate
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        class="btn btn-primary rounded-pill button_manual "
                                    >
                                        Submit Estimate
                                    </a>
                                </div>
                            </div>

                            <div class="col-11 col-xl col-md-5 border first_card_price_estimate estimate d-flex align-items-center ">
                                <div class="card-body ">
                                    <a
                                        href="#"
                                        class="btn btn-primary rounded-pill button_last_box mx-auto"
                                        //     role="button"
                                    >
                                        Show all Estimate
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceEstimates;
