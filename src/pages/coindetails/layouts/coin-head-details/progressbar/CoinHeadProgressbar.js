import React from 'react';
import './CoinHeadProgressBar.css';

const CoinHeadProgressbar = () => {
    return (
        <div className="coinhead__progressbar">
            <div
                className="progress__scale"
                style={{ width: '70%' }}
            >
                <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5.97873 0.913845C6.65487 -0.304615 8.34514 -0.304615 9.02128 0.913845L14.7621 11.2586C15.4382 12.4769 14.5929 14 13.2406 14H1.7594C0.407117 14 -0.438191 12.4769 0.23795 11.2586L5.97873 0.913845Z"
                        fill="#33B868"
                    />
                </svg>
            </div>
        </div>
    );
};

export default CoinHeadProgressbar;
