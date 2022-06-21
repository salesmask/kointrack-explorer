import React from 'react';
import './InfoSources.css';

import ListArrow from '../../../assets/coindetails/info-sources/list-arrow.svg';
import SourceCodeIcon from '../../../assets/coindetails/info-sources/source-code-icon.svg';
import WhitePaperIcon from '../../../assets/coindetails/info-sources/whitepaper-icon.svg';

const InfoSources = () => {
    return (
        <div className="infosources__wrapper">
            <ul className="infosources__inner--wrapper d-flex justify-content-flex-start align-items-center mb-0">
                <li className="active d-flex justify-content-center align-items-center rounded-pill me-4">
                    <a href="">
                        <span>bitcoin.org</span>
                    </a>
                </li>
                <li className="d-flex justify-content-center align-items-center rounded-pill me-4">
                    <a href="">
                        <span>Explorers</span>
                        <img
                            src={ListArrow}
                            alt="icon"
                            className="ms-2"
                        />
                    </a>
                </li>
                <li className="d-flex justify-content-center align-items-center rounded-pill me-4">
                    <a href="">
                        <span>Community</span>
                        <img
                            src={ListArrow}
                            alt="icon"
                            className="ms-2"
                        />
                    </a>
                </li>
                <li className="d-flex justify-content-center align-items-center rounded-pill me-4">
                    <a href="">
                        <span>Source Code</span>
                        <img
                            src={SourceCodeIcon}
                            alt="icon"
                            className="ms-2"
                        />
                    </a>
                </li>
                <li className="d-flex justify-content-center align-items-center rounded-pill me-4">
                    <a href="">
                        <span>Whitepaper</span>
                        <img
                            src={WhitePaperIcon}
                            alt="icon"
                            className="ms-2"
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default InfoSources;
