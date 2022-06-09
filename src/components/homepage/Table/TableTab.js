import React from 'react';
import './TableTab.css';
import Watchlist from '../../../assets/table/Watchlist.svg';
import Portfolio from '../../../assets/table/Porfolio.svg';
import Customize from '../../../assets/table/Customize.svg';
import Filter from '../../../assets/table/Filter.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function TableTab() {
    return (
        <div>
            <div className="table__container">
                <div className="tab__button button">
                    <img
                        src={Watchlist}
                        alt="tabletab"
                    ></img>
                    WatchList
                </div>

                <div className="tab__button button">
                    <img
                        src={Portfolio}
                        alt="tabletab"
                    ></img>
                    Portfolio
                </div>

                <div className="tab__button button">
                    <img
                        src={Filter}
                        alt="tabletab"
                    ></img>
                    Filter
                </div>

                <div className="tab__button button">
                    <img
                        src={Customize}
                        alt="tabletab"
                    ></img>
                    Customized
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="tab__container">
                <Tabs>
                    <TabList className="react-tabs__tab-list ">
                        <Tab className="react-tabs__tab tab__button button">
                            Cryptocurrencies
                        </Tab>
                        <Tab className="react-tabs__tab tab__button button">
                            Categories
                        </Tab>
                        <Tab className="react-tabs__tab tab__button button">
                            DeFi
                        </Tab>
                        <Tab className="react-tabs__tab tab__button button">
                            NFT
                        </Tab>
                        <Tab className="react-tabs__tab tab__button button">
                            Metaverse
                        </Tab>
                        <Tab className="react-tabs__tab tab__button button">
                            Polkadot
                        </Tab>
                        <Tab className="react-tabs__tab tab__button button">
                            BNB
                        </Tab>
                        <Tab className="react-tabs__tab tab__button button">
                            Chain
                        </Tab>
                        <Tab className="react-tabs__tab tab__button button">
                            Solana
                        </Tab>
                        <Tab className="react-tabs__tab tab__button button">
                            Avalanche
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
}
