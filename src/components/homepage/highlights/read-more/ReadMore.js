import React from 'react';
import './ReadMore.css';
import { FiChevronRight } from 'react-icons/fi';

const ReadMore = () => {
    return (
        <>
            <button
                className="highlights__readmore-button d-flex justify-content-center align-items-center px-3 py-2"
                role="button"
            >
                ReadMore
                <FiChevronRight className="readmore__angle" />
            </button>
        </>
    );
};

export default ReadMore;
