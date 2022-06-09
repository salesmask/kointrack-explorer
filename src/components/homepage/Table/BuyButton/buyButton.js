import React from 'react';
import './buyButton.css';
import { FiChevronRight } from 'react-icons/fi';

const buyButton = () => {
    return (
        <>
            <button className="highlights__readmore-button display__center">
                Buy
                <FiChevronRight className="readmore__angle" />
            </button>
        </>
    );
};

export default buyButton;
