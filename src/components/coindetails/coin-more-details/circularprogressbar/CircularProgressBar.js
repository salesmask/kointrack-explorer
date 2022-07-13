import React from 'react';
import './CircularProgressBar.css';

const CircularProgressBar = () => {
    return (
        <div className="circular__progress--wrapper">
            <svg>
                <circle
                    class="bg"
                    cx="50"
                    cy="50"
                    r="45"
                />
                <circle
                    class="meter-1"
                    cx="53"
                    cy="50"
                    r="45"
                    stroke-dasharray="300"
                />
            </svg>
            <div className="circular__progress--value">70%</div>
        </div>
    );
};

export default CircularProgressBar;
