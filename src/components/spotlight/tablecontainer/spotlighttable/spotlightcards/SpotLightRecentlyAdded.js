import React from 'react';
import { Link } from 'react-router-dom';
import './SpotLightCards.css';
import ReadMore from '../../../../homepage/highlights/read-more/ReadMore';
import TrendingIcon from '../../../../../assets/homepage/highlights/trending/Tranding_Icon.png';
import UpIcon from '../../../../../assets/homepage/highlights/trending/Increase_Arrow.svg';
import DownIcon from '../../../../../assets/homepage/highlights/trending/Decrease_Arrow.svg';

//Importing table icons
import Bitcoin from '../../../../../assets/table/Bitcoin.svg';
import SpotLightRecentlyAdded from '../../../../../assets/spotlight/SpotLightRecentlyAdded.svg';
import Polygon from '../../../../../assets/spotlight/Polygon.svg';
import Terra from '../../../../../assets/spotlight/Terra.svg';
import PolkaBridge from '../../../../../assets/spotlight/PolkaBridge.svg';
import SeeMore from '../seemore/SeeMore';

const SpotLightTrending = () => {
    return (
        <>
            <section className="highlights__card--wrapper ">
                {/* Heading section */}

                <div className="highlights__heading container-fluid d-flex justify-content-between align-items-center py-3 px-4 ">
                    <div className="highlights__title d-flex justify-content-center align-items-center">
                        <img
                            src={SpotLightRecentlyAdded}
                            alt="icon"
                            className="highlights__title-icon me-3"
                        />
                        <span className="text-nowrap lh-lg">
                            Recently Added
                        </span>
                    </div>
                    <Link to="trending">
                        <div className="highlights__readmore">
                            <SeeMore />
                        </div>
                    </Link>
                </div>

                {/* Table section */}

                <table className="table__main table table-borderless">
                    <thead className="table__head">
                        <tr className="table__head--row">
                            <th className="me-3">#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>24 h</th>
                        </tr>
                    </thead>

                    <tbody className="table__body--bg">
                        {/* Row One */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <div className="serial_number">
                                    <span>01</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="spotlight__coin--icon me-2"
                                        src={Polygon}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Polygon
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>$276,435,232</div>
                            </td>

                            <td>
                                <div className="one-day__pricechange pe-3 pe-md-0">
                                    14 hours ago
                                </div>
                            </td>
                        </tr>
                        <tr className="table__body--row align-middle">
                            <td>
                                <div className="serial_number">
                                    <span>02</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="spotlight__coin--icon me-2"
                                        src={Terra}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">Terra</div>
                                </div>
                            </td>

                            <td>
                                <div>$276,435,232</div>
                            </td>

                            <td>
                                <div className="one-day__pricechange pe-3 pe-md-0">
                                    2 Days ago
                                </div>
                            </td>
                        </tr>

                        <tr className="table__body--row align-middle">
                            <td>
                                <div className="serial_number">
                                    <span>03</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="spotlight__coin--icon me-2"
                                        src={PolkaBridge}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        PolkaBridge
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>$276,435,232</div>
                            </td>

                            <td>
                                <div className="one-day__pricechange  pe-3 pe-md-0">
                                    2 Days ago
                                </div>
                            </td>
                        </tr>
                        <tr className="table__body--row align-middle">
                            <td>
                                <div className="serial_number">
                                    <span>04</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="spotlight__coin--icon me-2"
                                        src={Polygon}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Polygon
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>$276,435,232</div>
                            </td>

                            <td>
                                <div className="one-day__pricechange  pe-3 pe-md-0">
                                    3 Days ago
                                </div>
                            </td>
                        </tr>
                        <tr className="table__body--row align-middle">
                            <td>
                                <div className="serial_number">
                                    <span>05</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="spotlight__coin--icon me-2"
                                        src={Terra}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">Terra</div>
                                </div>
                            </td>

                            <td>
                                <div>$276,435,232</div>
                            </td>

                            <td>
                                <div className="one-day__pricechange pe-3 pe-md-0">
                                    5 Days ago
                                </div>
                            </td>
                        </tr>
                        <tr className="table__body--row align-middle">
                            <td>
                                <div className="serial_number">
                                    <span>06</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="spotlight__coin--icon me-2"
                                        src={PolkaBridge}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        PolkaBridge
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>$276,435,232</div>
                            </td>

                            <td>
                                <div className="one-day__pricechange pe-3 pe-md-0">
                                    6 Days ago
                                </div>
                            </td>
                        </tr>
                        <tr className="table__body--row align-middle">
                            <td>
                                <div className="serial_number">
                                    <span>07</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="spotlight__coin--icon me-2"
                                        src={Polygon}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Polygon
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>$276,435,232</div>
                            </td>

                            <td>
                                <div className="one-day__pricechange pe-3 pe-md-0">
                                    7 Days ago
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default SpotLightTrending;
