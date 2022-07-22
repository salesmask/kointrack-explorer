import React from 'react';
import Krabots from '../../../../assets/recently-added/krabots.svg';
import BNB from '../../../../assets/recently-added/BNB.svg';
import Decrease_Arrow from '../../../../assets/table/Decrease_Arrow.svg';
import Increase_Arrow from '../../../../assets/table/Increase_Arrow.svg';
import Grapgh from '../../../../assets/table/Grapgh.svg';
import More_Icon from '../../../../assets/table/More_Icon.svg';
import WatchlistStar from '../../../watchliststar/WatchlistStar';

function RecentlyAddedTable() {
    return (
        <>
            <div className="trendingtable__wrapper mt-5">
                {/* table starting */}

                <table className="table__main table table-borderless">
                    <thead className="table__head">
                        <tr className="table__head--row">
                            <th className="star__head"></th>
                            <th className="me-3">#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>1h</th>
                            <th>24h</th>
                            <th>Fully Diluted Market Cap</th>
                            <th>Volume</th>
                            <th className="d-none d-xl-table-cell">
                                Blockchain
                            </th>
                            <th>Added</th>
                            <th className="menu__head"></th>
                        </tr>
                    </thead>

                    <tbody className="table__body--bg">
                        {/* Row One */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>01</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={Krabots}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Krabots
                                    </div>
                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                        KRAC
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>$0.2015</div>
                            </td>

                            <td>
                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Increase_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__up">0.01%</div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Decrease_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__down">19.01%</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>$18,476,419,541</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        $56,309,387
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="w-25 d-flex justify-content-start align-items-center">
                                    <img
                                        className="graph__image w-75 pe-2"
                                        src={BNB}
                                        alt="icon"
                                    ></img>
                                    <div className="symbol">BNB</div>
                                </div>
                            </td>

                            <td>
                                <div>14 hours ago</div>
                            </td>

                            <td>
                                <div className="more__icon--wrapper">
                                    <img
                                        className="more__icon"
                                        src={More_Icon}
                                        alt="icon"
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        {/* Row two */}
                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>02</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={Krabots}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Krabots
                                    </div>
                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                        KRAC
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>$0.2015</div>
                            </td>

                            <td>
                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Increase_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__up">0.01%</div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Decrease_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__down">19.01%</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>$18,476,419,541</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        $56,309,387
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="w-25 d-flex justify-content-start align-items-center">
                                    <img
                                        className="graph__image w-75 pe-2"
                                        src={BNB}
                                        alt="icon"
                                    ></img>
                                    <div className="symbol">BNB</div>
                                </div>
                            </td>

                            <td>
                                <div>14 hours ago</div>
                            </td>

                            <td>
                                <div className="more__icon--wrapper">
                                    <img
                                        className="more__icon"
                                        src={More_Icon}
                                        alt="icon"
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        {/* Row three */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>03</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={Krabots}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Krabots
                                    </div>
                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                        KRAC
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>$0.2015</div>
                            </td>

                            <td>
                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Increase_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__up">0.01%</div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Decrease_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__down">19.01%</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>$18,476,419,541</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        $56,309,387
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="w-25 d-flex justify-content-start align-items-center">
                                    <img
                                        className="graph__image w-75 pe-2"
                                        src={BNB}
                                        alt="icon"
                                    ></img>
                                    <div className="symbol">BNB</div>
                                </div>
                            </td>

                            <td>
                                <div>14 hours ago</div>
                            </td>

                            <td>
                                <div className="more__icon--wrapper">
                                    <img
                                        className="more__icon"
                                        src={More_Icon}
                                        alt="icon"
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        {/* Row four */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>04</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={Krabots}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Krabots
                                    </div>
                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                        KRAC
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>$0.2015</div>
                            </td>

                            <td>
                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Increase_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__up">0.01%</div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Decrease_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__down">19.01%</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>$18,476,419,541</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        $56,309,387
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="w-25 d-flex justify-content-start align-items-center">
                                    <img
                                        className="graph__image w-75 pe-2"
                                        src={BNB}
                                        alt="icon"
                                    ></img>
                                    <div className="symbol">BNB</div>
                                </div>
                            </td>

                            <td>
                                <div>14 hours ago</div>
                            </td>

                            <td>
                                <div className="more__icon--wrapper">
                                    <img
                                        className="more__icon"
                                        src={More_Icon}
                                        alt="icon"
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        {/* Row five */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>05</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={Krabots}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Krabots
                                    </div>
                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                        KRAC
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>$0.2015</div>
                            </td>

                            <td>
                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Increase_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__up">0.01%</div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Decrease_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__down">19.01%</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>$18,476,419,541</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        $56,309,387
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="w-25 d-flex justify-content-start align-items-center">
                                    <img
                                        className="graph__image w-75 pe-2"
                                        src={BNB}
                                        alt="icon"
                                    ></img>
                                    <div className="symbol">BNB</div>
                                </div>
                            </td>

                            <td>
                                <div>14 hours ago</div>
                            </td>

                            <td>
                                <div className="more__icon--wrapper">
                                    <img
                                        className="more__icon"
                                        src={More_Icon}
                                        alt="icon"
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        {/* Row six */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>06</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={Krabots}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Krabots
                                    </div>
                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                        KRAC
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>$0.2015</div>
                            </td>

                            <td>
                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Increase_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__up">0.01%</div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Decrease_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__down">19.01%</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>$18,476,419,541</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        $56,309,387
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="w-25 d-flex justify-content-start align-items-center">
                                    <img
                                        className="graph__image w-75 pe-2"
                                        src={BNB}
                                        alt="icon"
                                    ></img>
                                    <div className="symbol">BNB</div>
                                </div>
                            </td>

                            <td>
                                <div>14 hours ago</div>
                            </td>

                            <td>
                                <div className="more__icon--wrapper">
                                    <img
                                        className="more__icon"
                                        src={More_Icon}
                                        alt="icon"
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        {/* Row seven */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>07</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={Krabots}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Krabots
                                    </div>
                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                        KRAC
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>$0.2015</div>
                            </td>

                            <td>
                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Increase_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__up">0.01%</div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Decrease_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__down">19.01%</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>$18,476,419,541</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        $56,309,387
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="w-25 d-flex justify-content-start align-items-center">
                                    <img
                                        className="graph__image w-75 pe-2"
                                        src={BNB}
                                        alt="icon"
                                    ></img>
                                    <div className="symbol">BNB</div>
                                </div>
                            </td>

                            <td>
                                <div>14 hours ago</div>
                            </td>

                            <td>
                                <div className="more__icon--wrapper">
                                    <img
                                        className="more__icon"
                                        src={More_Icon}
                                        alt="icon"
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        {/* Row eight */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>08</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={Krabots}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Krabots
                                    </div>
                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                        KRAC
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>$0.2015</div>
                            </td>

                            <td>
                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Increase_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__up">0.01%</div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Decrease_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__down">19.01%</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>$18,476,419,541</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        $56,309,387
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="w-25 d-flex justify-content-start align-items-center">
                                    <img
                                        className="graph__image w-75 pe-2"
                                        src={BNB}
                                        alt="icon"
                                    ></img>
                                    <div className="symbol">BNB</div>
                                </div>
                            </td>

                            <td>
                                <div>14 hours ago</div>
                            </td>

                            <td>
                                <div className="more__icon--wrapper">
                                    <img
                                        className="more__icon"
                                        src={More_Icon}
                                        alt="icon"
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        {/* Row nine */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>09</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={Krabots}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Krabots
                                    </div>
                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                        KRAC
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>$0.2015</div>
                            </td>

                            <td>
                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Increase_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__up">0.01%</div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Decrease_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__down">19.01%</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>$18,476,419,541</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        $56,309,387
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="w-25 d-flex justify-content-start align-items-center">
                                    <img
                                        className="graph__image w-75 pe-2"
                                        src={BNB}
                                        alt="icon"
                                    ></img>
                                    <div className="symbol">BNB</div>
                                </div>
                            </td>

                            <td>
                                <div>14 hours ago</div>
                            </td>

                            <td>
                                <div className="more__icon--wrapper">
                                    <img
                                        className="more__icon"
                                        src={More_Icon}
                                        alt="icon"
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        {/* Row ten */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>10</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={Krabots}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Krabots
                                    </div>
                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                        KRAC
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>$0.2015</div>
                            </td>

                            <td>
                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Increase_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__up">0.01%</div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <img
                                        className="change__arrow--image me-2"
                                        src={Decrease_Arrow}
                                        alt="icon"
                                    ></img>
                                    <div className="value__down">19.01%</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>$18,476,419,541</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        $56,309,387
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="w-25 d-flex justify-content-start align-items-center">
                                    <img
                                        className="graph__image w-75 pe-2"
                                        src={BNB}
                                        alt="icon"
                                    ></img>
                                    <div className="symbol">BNB</div>
                                </div>
                            </td>

                            <td>
                                <div>14 hours ago</div>
                            </td>

                            <td>
                                <div className="more__icon--wrapper">
                                    <img
                                        className="more__icon"
                                        src={More_Icon}
                                        alt="icon"
                                    ></img>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* **************** */}
            </div>
        </>
    );
}

export default RecentlyAddedTable;
