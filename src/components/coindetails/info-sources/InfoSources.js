import React from 'react';
import './InfoSources.css';

import ListArrow from '../../../assets/coindetails/info-sources/list-arrow.svg';
import SourceCodeIcon from '../../../assets/coindetails/info-sources/source-code-icon.svg';
import WhitePaperIcon from '../../../assets/coindetails/info-sources/whitepaper-icon.svg';

const InfoSources = () => {
    return (
        <div className="infosources__wrapper container-fluid px-0 my-5">
            <div className="row mx-0">
                <div className="col-11 mx-auto px-0">
                    <div className="container-xxl px-0">
                        <ul className="infosources__inner--wrapper d-flex justify-content-flex-start align-items-center mb-0">
                            <li className="active d-flex justify-content-center align-items-center rounded-pill me-4 text-nowrap">
                                <a href="">
                                    <span>bitcoin.org</span>
                                </a>
                            </li>
                            <li className="d-flex justify-content-center align-items-center rounded-pill me-4 text-nowrap">
                                <a href="">
                                    <span>Explorers</span>
                                    <img
                                        src={ListArrow}
                                        alt="icon"
                                        className="ms-md-2"
                                    />
                                </a>
                            </li>
                            <li className="d-flex justify-content-center align-items-center rounded-pill me-4 text-nowrap">
                                <a href="">
                                    <span>Community</span>
                                    <img
                                        src={ListArrow}
                                        alt="icon"
                                        className="ms-md-2"
                                    />
                                </a>
                            </li>
                            <li className="d-flex justify-content-center align-items-center rounded-pill me-4 text-nowrap">
                                <a href="">
                                    <span>Source Code</span>
                                    <img
                                        src={SourceCodeIcon}
                                        alt="icon"
                                        className="ms-md-2"
                                    />
                                </a>
                            </li>
                            <li className="d-flex justify-content-center align-items-center rounded-pill me-4 text-nowrap">
                                <a href="">
                                    <span>Whitepaper</span>
                                    <img
                                        src={WhitePaperIcon}
                                        alt="icon"
                                        className="ms-md-2"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSources;
