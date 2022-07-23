import React from 'react';
import './CoinDescription.css';

import ReadMore from '../../../../../assets/coindetails/chart-section/coin-description/read-more-down.svg';

const CoinDescription = () => {
    return (
        <>
            <article>
                <h3 className="coin-description__heading mb-3">
                    BTC Price Live Data
                </h3>
                <p className="coin__description">
                    The live Bitcoin price today is $29,841.61 USD with a
                    24-hour trading volume of $41,520,863,712 USD. We update our
                    BTC to USD price in real-time. Bitcoin is down 5.66% in the
                    last 24 hours. The current CoinMarketCap ranking is #1, with
                    a live market cap of $568,660,984,662 USD. It has a
                    circulating supply of 19,055,975 BTC coins and a max supply
                    of 21,000,000 BTC coins.
                </p>
                <p className="coin__description">
                    If you would like to know where to buy Bitcoin at the
                    current rate, the top cryptocurrency exchanges for trading
                    in Bitcoin stock are currently Binance, OKX, Bybit, FTX, and
                    MEXC. You can find others listed on our crypto exchanges
                    page.
                </p>
            </article>
            <article className="mt-5 mb-5">
                <h3 className="coin-description__heading mb-3">
                    What Is Bitcoin (BTC)?
                </h3>
                <p className="coin__description">
                    Bitcoin is a decentralized cryptocurrency originally
                    described in a 2008 whitepaper by a person, or group of
                    people, using the alias Satoshi Nakamoto. It was launched
                    soon after, in January 2009.
                </p>
                <p className="coin__description">
                    Bitcoin is a peer-to-peer online currency, meaning that all
                    transactions happen directly between equal, independent
                    network participants, without the need for any intermediary
                    to permit or facilitate them. Bitcoin was created, according
                    to Nakamoto’s own words, to allow “online payments to be
                    sent directly from one party to another without going
                    through a financial institution.”
                </p>
                <p className="coin__description">
                    Some concepts for a similar type of a decentralized
                    electronic currency precede BTC, but Bitcoin holds the
                    distinction of being the first-ever cryptocurrency to come
                    into actual use.
                </p>
            </article>

            <div className="description-read-more__wrapper mx-auto rounded-pill mb-5">
                <span className="me-3">Read More</span>
                <img
                    src={ReadMore}
                    alt="read-more"
                    className="description-read-more__icon"
                />
            </div>
        </>
    );
};

export default CoinDescription;
