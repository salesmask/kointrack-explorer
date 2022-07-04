import React from 'react';
import './TableTabs.css';
import Watchlist from '../../../assets/table/Watchlist.svg';
import Portfolio from '../../../assets/table/Porfolio.svg';
import Customize from '../../../assets/table/Customize.svg';
import Filter from '../../../assets/table/Filter.svg';

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
                            <img
                                src={Watchlist}
                                alt="tabletab"
                                className="editables__tab--image"
                            ></img>
                            WatchList
                        </div>

                        <div className="editables__tab gap-2 gap-sm-3 tab__button me-2 me-sm-4">
                            <img
                                src={Portfolio}
                                alt="tabletab"
                                className="editables__tab--image"
                            ></img>
                            Portfolio
                        </div>

                        <div className="editables__tab gap-2 gap-sm-3 tab__button me-2 me-sm-4">
                            <img
                                src={Filter}
                                alt="tabletab"
                                className="editables__tab--image"
                            ></img>
                            Filter
                        </div>

                        <div className="editables__tab gap-2 gap-sm-3 tab__button me-2 me-sm-4">
                            <img
                                src={Customize}
                                alt="tabletab"
                                className="editables__tab--image"
                            ></img>
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
