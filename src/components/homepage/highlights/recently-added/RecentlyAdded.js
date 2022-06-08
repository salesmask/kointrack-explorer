import React from 'react';
import '../HighlightCards.css';
import ReadMore from '../read-more/ReadMore';
import RecentlyAddedIcon from '../../../../assests/homepage/highlights/recently-added/Recently_Added_Icon.svg';
import UpIcon from '../../../../assests/homepage/highlights/recently-added/Increase_Arrow.png';
import DownIcon from '../../../../assests/homepage/highlights/recently-added/Decrease_Arrow.png';

//Importing table icons
import Calas from '../../../../assests/homepage/highlights/recently-added/Calaswap_Icon.svg';
import Rare from '../../../../assests/homepage/highlights/recently-added/Rare Ball Shares_Icon.svg';
import Star from '../../../../assests/homepage/highlights/recently-added/Star Chain_Icon.svg';

const Gainers = () => {
    return (
        <section className="highlights__card--wrapper">
            {/* Heading section */}

            <div className="highlights__heading">
                <div className="highlights__title display__center">
                    <img
                        src={RecentlyAddedIcon}
                        alt="icon"
                        className="highlights__title-icon"
                    />
                    <span>Recently Added</span>
                </div>
                <div className="highlights__readmore">
                    <ReadMore />
                </div>
            </div>

            {/* Table section */}

            <table className="highlights__table">
                <tbody>
                    <tr>
                        <td className="slno">01</td>
                        <td className="image">
                            <img
                                src={Calas}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">Calaswap</td>
                        <td className="symbol">CLS</td>
                        <td className="percent__change display__center">
                            {/* <img src={UpIcon} alt="icon" className='percent__change--upicon'/> */}
                            <span id="recently__added--price">$0.09051</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="slno">02</td>
                        <td className="image">
                            <img
                                src={Rare}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">Rare Ball Shares</td>
                        <td className="symbol">RBS</td>
                        <td className="percent__change display__center">
                            {/* <img src={UpIcon} alt="icon" className='percent__change--upicon'/> */}
                            <span id="recently__added--price">$0.8906</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="slno">03</td>
                        <td className="image">
                            <img
                                src={Star}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">Star Chain</td>
                        <td className="symbol">START1</td>
                        <td className="percent__change display__center">
                            {/* <img src={UpIcon} alt="icon" className='percent__change--upicon'/> */}
                            <span id="recently__added--price">$0.1359</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="slno">04</td>
                        <td className="image">
                            <img
                                src={Calas}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">Calaswap</td>
                        <td className="symbol">CLS</td>
                        <td className="percent__change display__center">
                            {/* <img src={UpIcon} alt="icon" className='percent__change--upicon'/> */}
                            <span id="recently__added--price">$0.09051</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="slno">05</td>
                        <td className="image">
                            <img
                                src={Rare}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">Rare Ball SharesRBS</td>
                        <td className="symbol">RBS</td>
                        <td className="percent__change display__center">
                            {/* <img src={UpIcon} alt="icon" className='percent__change--upicon'/> */}
                            <span id="recently__added--price">$0.8906</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="slno">06</td>
                        <td className="image">
                            <img
                                src={Star}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">Star Chain</td>
                        <td className="symbol">STAR1</td>
                        <td className="percent__change display__center">
                            {/* <img src={UpIcon} alt="icon" className='percent__change--upicon'/> */}
                            <span id="recently__added--price">$0.1359</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="slno">07</td>
                        <td className="image">
                            <img
                                src={Calas}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">Calaswap</td>
                        <td className="symbol">CLS</td>
                        <td className="percent__change display__center">
                            {/* <img src={UpIcon} alt="icon" className='percent__change--upicon'/> */}
                            <span id="recently__added--price">$0.09051</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Gainers;
