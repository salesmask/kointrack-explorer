import React from 'react';
import './Gainers.css';

import Watchlist_Outline from '../../../../assets/table/Watchlist_Outline.svg';
import Stark from '../../../../assets/gainers-losers/StarkMeta.svg';
import Increase_Arrow from '../../../../assets/table/Increase_Arrow.svg';

const Gainers = () => {
    return (
        <>
            <div className="gainers__outer--wrapper">
                <h3 className="ms-3 mb-3">Gainers</h3>
                <div className="gainers__table--wrapper">
                    <table className="table__main table table-borderless">
                        <thead className="table__head">
                            <tr className="table__head--row">
                                <th className="me-3">#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>24h</th>
                                <th>Volume (24h)</th>
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
                                            className="coin__image me-2"
                                            src={Stark}
                                            alt="img"
                                        ></img>
                                        <div className="coin__name me-2">
                                            StarkMeta
                                        </div>
                                        <div className="coin__symbol me-2 d-none d-lg-block">
                                            SMETA
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div>$276,435,232</div>
                                </td>

                                <td>
                                    <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Increase_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__up">6.45%</div>
                                    </div>
                                </td>

                                <td>
                                    <div className="day-volume">
                                        <div className="in-currency">
                                            $654,231,432,321
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            {/* Row two */}

                            <tr className="table__body--row align-middle">
                                <td>
                                    <div className="serial_number">
                                        <span>02</span>
                                    </div>
                                </td>

                                <td>
                                    <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                        <img
                                            className="coin__image me-2"
                                            src={Stark}
                                            alt="img"
                                        ></img>
                                        <div className="coin__name me-2">
                                            StarkMeta
                                        </div>
                                        <div className="coin__symbol me-2 d-none d-lg-block">
                                            SMETA
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div>$276,435,232</div>
                                </td>

                                <td>
                                    <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Increase_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__up">6.45%</div>
                                    </div>
                                </td>

                                <td>
                                    <div className="day-volume">
                                        <div className="in-currency">
                                            $654,231,432,321
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            {/* Row three */}

                            <tr className="table__body--row align-middle">
                                <td>
                                    <div className="serial_number">
                                        <span>03</span>
                                    </div>
                                </td>

                                <td>
                                    <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                        <img
                                            className="coin__image me-2"
                                            src={Stark}
                                            alt="img"
                                        ></img>
                                        <div className="coin__name me-2">
                                            StarkMeta
                                        </div>
                                        <div className="coin__symbol me-2 d-none d-lg-block">
                                            SMETA
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div>$276,435,232</div>
                                </td>

                                <td>
                                    <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Increase_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__up">6.45%</div>
                                    </div>
                                </td>

                                <td>
                                    <div className="day-volume">
                                        <div className="in-currency">
                                            $654,231,432,321
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            {/* Row four */}

                            <tr className="table__body--row align-middle">
                                <td>
                                    <div className="serial_number">
                                        <span>04</span>
                                    </div>
                                </td>

                                <td>
                                    <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                        <img
                                            className="coin__image me-2"
                                            src={Stark}
                                            alt="img"
                                        ></img>
                                        <div className="coin__name me-2">
                                            StarkMeta
                                        </div>
                                        <div className="coin__symbol me-2 d-none d-lg-block">
                                            SMETA
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div>$276,435,232</div>
                                </td>

                                <td>
                                    <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Increase_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__up">6.45%</div>
                                    </div>
                                </td>

                                <td>
                                    <div className="day-volume">
                                        <div className="in-currency">
                                            $654,231,432,321
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            {/* Row five */}

                            <tr className="table__body--row align-middle">
                                <td>
                                    <div className="serial_number">
                                        <span>05</span>
                                    </div>
                                </td>

                                <td>
                                    <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                        <img
                                            className="coin__image me-2"
                                            src={Stark}
                                            alt="img"
                                        ></img>
                                        <div className="coin__name me-2">
                                            StarkMeta
                                        </div>
                                        <div className="coin__symbol me-2 d-none d-lg-block">
                                            SMETA
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div>$276,435,232</div>
                                </td>

                                <td>
                                    <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Increase_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__up">6.45%</div>
                                    </div>
                                </td>

                                <td>
                                    <div className="day-volume">
                                        <div className="in-currency">
                                            $654,231,432,321
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            {/* Row six */}
                            <tr className="table__body--row align-middle">
                                <td>
                                    <div className="serial_number">
                                        <span>06</span>
                                    </div>
                                </td>

                                <td>
                                    <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                        <img
                                            className="coin__image me-2"
                                            src={Stark}
                                            alt="img"
                                        ></img>
                                        <div className="coin__name me-2">
                                            StarkMeta
                                        </div>
                                        <div className="coin__symbol me-2 d-none d-lg-block">
                                            SMETA
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div>$276,435,232</div>
                                </td>

                                <td>
                                    <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Increase_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__up">6.45%</div>
                                    </div>
                                </td>

                                <td>
                                    <div className="day-volume">
                                        <div className="in-currency">
                                            $654,231,432,321
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            {/* Row seven */}

                            <tr className="table__body--row align-middle">
                                <td>
                                    <div className="serial_number">
                                        <span>07</span>
                                    </div>
                                </td>

                                <td>
                                    <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                        <img
                                            className="coin__image me-2"
                                            src={Stark}
                                            alt="img"
                                        ></img>
                                        <div className="coin__name me-2">
                                            StarkMeta
                                        </div>
                                        <div className="coin__symbol me-2 d-none d-lg-block">
                                            SMETA
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div>$276,435,232</div>
                                </td>

                                <td>
                                    <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Increase_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__up">6.45%</div>
                                    </div>
                                </td>

                                <td>
                                    <div className="day-volume">
                                        <div className="in-currency">
                                            $654,231,432,321
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            {/* Row eight */}

                            <tr className="table__body--row align-middle">
                                <td>
                                    <div className="serial_number">
                                        <span>08</span>
                                    </div>
                                </td>

                                <td>
                                    <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                        <img
                                            className="coin__image me-2"
                                            src={Stark}
                                            alt="img"
                                        ></img>
                                        <div className="coin__name me-2">
                                            StarkMeta
                                        </div>
                                        <div className="coin__symbol me-2 d-none d-lg-block">
                                            SMETA
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div>$276,435,232</div>
                                </td>

                                <td>
                                    <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Increase_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__up">6.45%</div>
                                    </div>
                                </td>

                                <td>
                                    <div className="day-volume">
                                        <div className="in-currency">
                                            $654,231,432,321
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            {/* Row nine */}

                            <tr className="table__body--row align-middle">
                                <td>
                                    <div className="serial_number">
                                        <span>09</span>
                                    </div>
                                </td>

                                <td>
                                    <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                        <img
                                            className="coin__image me-2"
                                            src={Stark}
                                            alt="img"
                                        ></img>
                                        <div className="coin__name me-2">
                                            StarkMeta
                                        </div>
                                        <div className="coin__symbol me-2 d-none d-lg-block">
                                            SMETA
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div>$276,435,232</div>
                                </td>

                                <td>
                                    <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Increase_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__up">6.45%</div>
                                    </div>
                                </td>

                                <td>
                                    <div className="day-volume">
                                        <div className="in-currency">
                                            $654,231,432,321
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            {/* Row ten */}
                            <tr className="table__body--row align-middle">
                                <td>
                                    <div className="serial_number">
                                        <span>10</span>
                                    </div>
                                </td>

                                <td>
                                    <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                        <img
                                            className="coin__image me-2"
                                            src={Stark}
                                            alt="img"
                                        ></img>
                                        <div className="coin__name me-2">
                                            StarkMeta
                                        </div>
                                        <div className="coin__symbol me-2 d-none d-lg-block">
                                            SMETA
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div>$276,435,232</div>
                                </td>

                                <td>
                                    <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Increase_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__up">6.45%</div>
                                    </div>
                                </td>

                                <td>
                                    <div className="day-volume">
                                        <div className="in-currency">
                                            $654,231,432,321
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Gainers;
