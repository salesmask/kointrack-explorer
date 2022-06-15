import React from 'react';
// import './PriceEstimates.css'

const PriceEstimates = () => {
    return (
        <div className="price_estimates_layout">
            <h3> Social Bitcoin Price Estimates</h3>

            <p className="price_paragraph">
                This feature is in beta testing. Place your estimates for next 6
                months and see what other’s are thinking about it. Data
                displayed are based on user input compiled by CoinMarketCap. The
                cut-off for estimates for each month-end is on the 21st of each
                month.
            </p>

            <div className="price_estimates_wrapper">
                <div className="price_box1">
                    <div className="price_box1_child1"></div>
                    <div className="price_box1_child2 ">
                        <h3>Place your estimate</h3>
                        <p>At least to see how others estimate</p>
                        <button
                            type="button"
                            className="price_button1"
                        >
                            Submit estimate
                        </button>
                    </div>
                </div>

                <div className="price_box2">
                    <div className="price_box2_child1"></div>
                    <div className="price_box2_child2">
                        <h3>Place your estimate</h3>
                        <p>At least to see how others estimate</p>
                        <button
                            type="button"
                            className="price_button2"
                        >
                            Submit estimate
                        </button>
                    </div>
                </div>

                <div className="price_box3">
                    <div className="price_box3_child1"></div>
                    <div className="price_box3_child2">
                        <h3>Place your estimate</h3>
                        <p>At least to see how others estimate</p>
                        <button
                            type="button"
                            className="price_button3"
                        >
                            Submit estimate
                        </button>
                    </div>
                </div>

                <div className="price_box4">
                    <button
                        type="button"
                        className="price_button4"
                    >
                        Show all estimate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PriceEstimates;
