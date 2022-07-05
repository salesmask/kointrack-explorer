import React from 'react';
import './TableTabs.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Table } from 'react-bootstrap';

export default function TableTabs() {
    return (
        <div className="container-fluid px-0">
            <div className="row mx-0">
                <div className="col-11 mx-auto px-0">
                    {/* Table filter tabs */}

                    <div className="editables__container d-flex justify-content-flex-start align-items-center mb-5 overflow-scroll">
                        <div className="editables__tab gap-2 gap-sm-3 tab__button me-2 me-sm-4">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="watchlist__star"
                            >
                                <path
                                    fill-rule="nonzero"
                                    clip-rule="evenodd"
                                    d="M14.1399 6.24171L13.0343 2.83906C12.7088 1.83707 11.2912 1.83707 10.9657 2.83906L9.86007 6.24171C9.42328 7.58601 8.17055 8.49618 6.75706 8.49618H3.1793C2.12575 8.49618 1.6877 9.84434 2.54005 10.4636L5.43451 12.5666C6.57805 13.3974 7.05655 14.8701 6.61976 16.2144L5.51417 19.617C5.18861 20.619 6.33542 21.4522 7.18777 20.833L10.0822 18.73C11.2258 17.8992 12.7742 17.8992 13.9178 18.73L16.8122 20.833C17.6646 21.4522 18.8114 20.619 18.4858 19.617L17.3802 16.2144C16.9434 14.8701 17.422 13.3974 18.5655 12.5666L21.46 10.4636C22.3123 9.84435 21.8742 8.49618 20.8207 8.49618H17.2429C15.8295 8.49618 14.5767 7.58601 14.1399 6.24171ZM14.0687 2.50298C13.4175 0.499005 10.5825 0.499007 9.93132 2.50298L8.82574 5.90563C8.53454 6.80183 7.69938 7.40861 6.75706 7.40861H3.1793C1.0722 7.40861 0.196109 10.1049 1.90079 11.3435L4.79526 13.4464C5.55761 14.0003 5.87661 14.9821 5.58542 15.8783L4.47983 19.2809C3.8287 21.2849 6.12234 22.9513 7.82702 21.7128L10.7215 19.6099C11.4838 19.056 12.5162 19.056 13.2785 19.6099L16.173 21.7128C17.8777 22.9513 20.1713 21.2849 19.5202 19.2809L18.4146 15.8783C18.1234 14.9821 18.4424 14.0003 19.2047 13.4464L22.0992 11.3435C23.8039 10.1049 22.9278 7.40861 20.8207 7.40861H17.2429C16.3006 7.40861 15.4655 6.80183 15.1743 5.90563L14.0687 2.50298Z"
                                    fill="#ffbb44"
                                    stroke="#ffbb44"
                                    stroke-width="0.5"
                                />
                            </svg>
                            WatchList
                        </div>

                        <div className="editables__tab gap-2 gap-sm-3 tab__button me-2 me-sm-4">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="portfolio__filter"
                            >
                                <path
                                    d="M10.8001 5.39989C8.96134 5.39989 7.16881 5.97584 5.67422 7.04685C4.17963 8.11786 3.05805 9.63013 2.46702 11.3713C1.87598 13.1124 1.84518 14.9949 2.37893 16.7545C2.91268 18.514 3.98417 20.0622 5.44292 21.1815C6.90167 22.3008 8.67439 22.9351 10.5121 22.9953C12.3499 23.0554 14.1603 22.5385 15.6891 21.5169C17.2179 20.4954 18.3884 19.0206 19.0361 17.2998C19.6838 15.5789 19.7761 13.6984 19.3003 11.9223L10.8001 14.1999L10.8001 5.39989Z"
                                    fill="#2B50FF"
                                />
                                <path
                                    d="M21.5716 9.78458C21.5033 8.63096 21.2084 7.50209 20.7039 6.46243C20.1993 5.42277 19.4949 4.49267 18.6308 3.72525C17.7668 2.95782 16.76 2.36809 15.6681 1.98974C14.5761 1.61138 13.4204 1.4518 12.2668 1.52012L12.2664 12L21.5716 9.78458Z"
                                    fill="#2B50FF"
                                />
                            </svg>
                            Portfolio
                        </div>

                        <div className="editables__tab gap-2 gap-sm-3 tab__button me-2 me-sm-4">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="filter__svg"
                            >
                                <rect
                                    x="8.33301"
                                    y="6.91663"
                                    width="14.6667"
                                    height="1.83333"
                                    rx="0.916667"
                                    fill="#2B50FF"
                                />
                                <rect
                                    x="1"
                                    y="6.91663"
                                    width="3.66667"
                                    height="1.83333"
                                    rx="0.916667"
                                    fill="#2B50FF"
                                />
                                <circle
                                    cx="6.50033"
                                    cy="7.83333"
                                    r="2.83333"
                                    stroke="#2B50FF"
                                    stroke-width="2"
                                />
                                <rect
                                    width="14.6667"
                                    height="1.83333"
                                    rx="0.916667"
                                    transform="matrix(-1 0 0 1 15.667 14.25)"
                                    fill="#2B50FF"
                                />
                                <rect
                                    width="3.66667"
                                    height="1.83333"
                                    rx="0.916667"
                                    transform="matrix(-1 0 0 1 23 14.25)"
                                    fill="#2B50FF"
                                />
                                <circle
                                    r="2.83333"
                                    transform="matrix(-1 0 0 1 17.4997 15.1667)"
                                    stroke="#2B50FF"
                                    stroke-width="2"
                                />
                            </svg>
                            Filter
                        </div>

                        <div className="editables__tab gap-2 gap-sm-3 tab__button me-2 me-sm-4">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="1"
                                    y="1"
                                    width="22"
                                    height="22"
                                    rx="2"
                                    fill="#2B50FF"
                                    className="customize__rect"
                                />
                                <rect
                                    x="3"
                                    y="4"
                                    width="8"
                                    height="7"
                                    rx="1"
                                    fill="white"
                                />
                                <rect
                                    x="3"
                                    y="14"
                                    width="8"
                                    height="7"
                                    rx="1"
                                    fill="white"
                                />
                                <rect
                                    x="13"
                                    y="3"
                                    width="8"
                                    height="7"
                                    rx="1"
                                    fill="white"
                                />
                                <rect
                                    x="13"
                                    y="14"
                                    width="8"
                                    height="7"
                                    rx="1"
                                    fill="white"
                                />
                            </svg>
                            Customize
                        </div>
                    </div>

                    {/* Table tabs */}

                    <div className="tab__container ">
                        <Tabs>
                            <TabList className="react-tabs__tab-list d-flex justify-content-flex-start align-items-center py-3 border-bottom-0 gap-2 gap-sm-3 gap-md-4">
                                <Tab className="react-tabs__tab tab__button">
                                    Cryptocurrencies
                                </Tab>
                                <Tab className="react-tabs__tab tab__button">
                                    Categories
                                </Tab>
                                <Tab className="react-tabs__tab tab__button">
                                    DeFi
                                </Tab>
                                <Tab className="react-tabs__tab tab__button">
                                    NFT
                                </Tab>
                                <Tab className="react-tabs__tab tab__button">
                                    Metaverse
                                </Tab>
                                <Tab className="react-tabs__tab tab__button">
                                    Polkadot
                                </Tab>
                                <Tab className="react-tabs__tab tab__button">
                                    BNB
                                </Tab>
                                <Tab className="react-tabs__tab tab__button">
                                    Chain
                                </Tab>
                                <Tab className="react-tabs__tab tab__button">
                                    Solana
                                </Tab>
                                <Tab className="react-tabs__tab tab__button">
                                    Avalanche
                                </Tab>
                            </TabList>

                            {/* <TabPanel>
                                   <h2><Table/></h2>
                                   </TabPanel>
                                   <TabPanel>
                                   <h2>Any content 2</h2>
                               </TabPanel> */}
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}
