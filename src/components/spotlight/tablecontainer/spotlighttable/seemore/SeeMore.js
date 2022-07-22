import React from 'react';
import './SeeMore.css';
import { FiChevronRight } from 'react-icons/fi';

const SeeMore = () => {
    return (
        <>
            <button
                className="highlights__seemore-button d-flex justify-content-center align-items-center px-3 py-2"
                role="button"
            >
                See More
                <FiChevronRight className="seemore__angle" />
            </button>
        </>
    );
};

export default SeeMore;
