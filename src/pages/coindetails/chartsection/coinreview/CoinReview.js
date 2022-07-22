import React from 'react';
import './CoinReview.css';

import ThumbsUp from '../../../../assets/coindetails/chart-section/coin-review/good.svg';
import ThumbsDown from '../../../../assets/coindetails/chart-section/coin-review/bad.svg';

const CoinReview = () => {
    return (
        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center">
            <div className="coin-review__question--wrapper text-center text-sm-start">
                <h3 className="question">
                    How do you feel about Bitcoin today?
                </h3>
                <p className="comment">Vote to see community results</p>
            </div>
            <div className="coin-review__button--wrapper d-flex justify-content-center align-items-center">
                <li
                    className="good__wrapper d-flex justify-content-center align-items-center rounded-pill me-4"
                    role="button"
                >
                    <img
                        src={ThumbsUp}
                        alt="good"
                        className="me-2 mb-1"
                    />
                    <span>Good</span>
                </li>
                <li
                    className="bad__wrapper d-flex justify-content-center align-items-center rounded-pill"
                    role="button"
                >
                    <img
                        src={ThumbsDown}
                        alt="bad"
                        className="me-2 mt-1"
                    />
                    <span>Bad</span>
                </li>
            </div>
        </div>
    );
};

export default CoinReview;
