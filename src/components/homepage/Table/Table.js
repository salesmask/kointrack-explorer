import React from 'react';
import TableTab from './TableTab';
import './Table.css';
import Watchlist_Outline from '../../../assets/table/Watchlist_Outline.svg';
import Bitcoin from '../../../assets/table/Bitcoin.svg';
import Decrease_Arrow from '../../../assets/table/Decrease_Arrow.svg';
import Increase_Arrow from '../../../assets/table/Increase_Arrow.svg';
import Grapgh from '../../../assets/table/Grapgh.svg';
import More_Icon from '../../../assets/table/More_Icon.svg';

export default function Table() {
    return (
        <div>
            <div>
                <TableTab />
            </div>

            <div className="table__container--wrapper">
                <table className="table__main">
                    <thead className="table__head">
                        <tr className="table__head--row">
                            <th className="table__head--font">#</th>
                            <th className="table__font--name">Name</th>

                            <th className="table__head--font">Price</th>
                            <th className="table__head--font">24h %</th>
                            <th className="table__head--font">7d %</th>
                            <th className="table__head--font">Market Cap</th>
                            <th className="table__head--font">Volume (24h)</th>
                            <th className="table__head--font">
                                Circulating Supply
                            </th>
                            <th className="table__head--font">Last 7 Days</th>
                        </tr>
                    </thead>

                    <tbody className="table__body--bg">
                        <tr className="table__body--row">
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="watchlist__star"
                                        src={Watchlist_Outline}
                                        alt=""
                                    ></img>
                                    <span className="font__size">01</span>
                                </div>
                            </td>

                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="coins__image"
                                        src={Bitcoin}
                                        alt=""
                                    ></img>
                                    <div className="spacing font__size">
                                        Bitcoin
                                    </div>
                                    <div className="spacing font__fade">
                                        BTC
                                    </div>
                                    <button className="buy__button">Buy</button>
                                </div>
                            </td>

                            <td>
                                <div className="font__size">$276,435,232</div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="downarrow__image"
                                        src={Decrease_Arrow}
                                        alt=""
                                    ></img>
                                    <div className="font__size">6.45%</div>
                                </div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="downarrow__image"
                                        src={Decrease_Arrow}
                                        alt=""
                                    ></img>
                                    <div className="font__size">6.45%</div>
                                </div>
                            </td>
                            <td>
                                <div className="font__size">
                                    $571,123,345,234
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <div className="font__size">
                                        $654,231,432,321
                                    </div>
                                    <div className="font__fade">
                                        $732,574,345
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <span className="font__size">
                                        $654,231,432,321
                                    </span>
                                    <span className="spacing__btc font__size">
                                        BTC
                                    </span>
                                    <div>
                                        <progress></progress>
                                    </div>

                                    <div></div>
                                </div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="graph__image"
                                        src={Grapgh}
                                        alt=""
                                    ></img>
                                    <img
                                        className="more__icon"
                                        src={More_Icon}
                                        alt=""
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        <tr className="table__body--row">
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="watchlist__star"
                                        src={Watchlist_Outline}
                                        alt=""
                                    ></img>
                                    <span className="font__size">01</span>
                                </div>
                            </td>

                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="coins__image"
                                        src={Bitcoin}
                                        alt=""
                                    ></img>
                                    <div className="spacing font__size">
                                        Bitcoin
                                    </div>
                                    <div className="spacing font__fade">
                                        BTC
                                    </div>
                                    <button className="buy__button">Buy</button>
                                </div>
                            </td>

                            <td>
                                <div className="font__size">$276,435,232</div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="downarrow__image"
                                        src={Decrease_Arrow}
                                        alt=""
                                    ></img>
                                    <div className="font__size">6.45%</div>
                                </div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="downarrow__image"
                                        src={Decrease_Arrow}
                                        alt=""
                                    ></img>
                                    <div className="font__size">6.45%</div>
                                </div>
                            </td>
                            <td>
                                <div className="font__size">
                                    $571,123,345,234
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <div className="font__size">
                                        $654,231,432,321
                                    </div>
                                    <div className="font__fade">
                                        $732,574,345
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <span className="font__size">
                                        $654,231,432,321
                                    </span>
                                    <span className="spacing__btc font__size">
                                        BTC
                                    </span>
                                    <div>
                                        <progress></progress>
                                    </div>

                                    <div></div>
                                </div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="graph__image"
                                        src={Grapgh}
                                        alt=""
                                    ></img>
                                    <img
                                        className="more__icon"
                                        src={More_Icon}
                                        alt=""
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        <tr className="table__body--row">
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="watchlist__star"
                                        src={Watchlist_Outline}
                                        alt=""
                                    ></img>
                                    <span className="font__size">01</span>
                                </div>
                            </td>

                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="coins__image"
                                        src={Bitcoin}
                                        alt=""
                                    ></img>
                                    <div className="spacing font__size">
                                        Bitcoin
                                    </div>
                                    <div className="spacing font__fade">
                                        BTC
                                    </div>
                                    <button className="buy__button">Buy</button>
                                </div>
                            </td>

                            <td>
                                <div className="font__size">$276,435,232</div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="downarrow__image"
                                        src={Decrease_Arrow}
                                        alt=""
                                    ></img>
                                    <div className="font__size">6.45%</div>
                                </div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="downarrow__image"
                                        src={Decrease_Arrow}
                                        alt=""
                                    ></img>
                                    <div className="font__size">6.45%</div>
                                </div>
                            </td>
                            <td>
                                <div className="font__size">
                                    $571,123,345,234
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <div className="font__size">
                                        $654,231,432,321
                                    </div>
                                    <div className="font__fade">
                                        $732,574,345
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <span className="font__size">
                                        $654,231,432,321
                                    </span>
                                    <span className="spacing__btc font__size">
                                        BTC
                                    </span>
                                    <div>
                                        <progress></progress>
                                    </div>

                                    <div></div>
                                </div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="graph__image"
                                        src={Grapgh}
                                        alt=""
                                    ></img>
                                    <img
                                        className="more__icon"
                                        src={More_Icon}
                                        alt=""
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        <tr className="table__body--row">
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="watchlist__star"
                                        src={Watchlist_Outline}
                                        alt=""
                                    ></img>
                                    <span className="font__size">01</span>
                                </div>
                            </td>

                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="coins__image"
                                        src={Bitcoin}
                                        alt=""
                                    ></img>
                                    <div className="spacing font__size">
                                        Bitcoin
                                    </div>
                                    <div className="spacing font__fade">
                                        BTC
                                    </div>
                                    <button className="buy__button">Buy</button>
                                </div>
                            </td>

                            <td>
                                <div className="font__size">$276,435,232</div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="downarrow__image"
                                        src={Decrease_Arrow}
                                        alt=""
                                    ></img>
                                    <div className="font__size">6.45%</div>
                                </div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="downarrow__image"
                                        src={Decrease_Arrow}
                                        alt=""
                                    ></img>
                                    <div className="font__size">6.45%</div>
                                </div>
                            </td>
                            <td>
                                <div className="font__size">
                                    $571,123,345,234
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <div className="font__size">
                                        $654,231,432,321
                                    </div>
                                    <div className="font__fade">
                                        $732,574,345
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <span className="font__size">
                                        $654,231,432,321
                                    </span>
                                    <span className="spacing__btc font__size">
                                        BTC
                                    </span>
                                    <div>
                                        <progress></progress>
                                    </div>

                                    <div></div>
                                </div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="graph__image"
                                        src={Grapgh}
                                        alt=""
                                    ></img>
                                    <img
                                        className="more__icon"
                                        src={More_Icon}
                                        alt=""
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        <tr className="table__body--row">
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="watchlist__star"
                                        src={Watchlist_Outline}
                                        alt=""
                                    ></img>
                                    <span className="font__size">01</span>
                                </div>
                            </td>

                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="coins__image"
                                        src={Bitcoin}
                                        alt=""
                                    ></img>
                                    <div className="spacing font__size">
                                        Bitcoin
                                    </div>
                                    <div className="spacing font__fade">
                                        BTC
                                    </div>
                                    <button className="buy__button">Buy</button>
                                </div>
                            </td>

                            <td>
                                <div className="font__size">$276,435,232</div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="downarrow__image"
                                        src={Decrease_Arrow}
                                        alt=""
                                    ></img>
                                    <div className="font__size">6.45%</div>
                                </div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="downarrow__image"
                                        src={Decrease_Arrow}
                                        alt=""
                                    ></img>
                                    <div className="font__size">6.45%</div>
                                </div>
                            </td>
                            <td>
                                <div className="font__size">
                                    $571,123,345,234
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <div className="font__size">
                                        $654,231,432,321
                                    </div>
                                    <div className="font__fade">
                                        $732,574,345
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <span className="font__size">
                                        $654,231,432,321
                                    </span>
                                    <span className="spacing__btc font__size">
                                        BTC
                                    </span>
                                    <div>
                                        <progress></progress>
                                    </div>

                                    <div></div>
                                </div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="graph__image"
                                        src={Grapgh}
                                        alt=""
                                    ></img>
                                    <img
                                        className="more__icon"
                                        src={More_Icon}
                                        alt=""
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        <tr className="table__body--row">
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="watchlist__star"
                                        src={Watchlist_Outline}
                                        alt=""
                                    ></img>
                                    <span className="font__size">01</span>
                                </div>
                            </td>

                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="coins__image"
                                        src={Bitcoin}
                                        alt=""
                                    ></img>
                                    <div className="spacing font__size">
                                        Bitcoin
                                    </div>
                                    <div className="spacing font__fade">
                                        BTC
                                    </div>
                                    <button className="buy__button">Buy</button>
                                </div>
                            </td>

                            <td>
                                <div className="font__size">$276,435,232</div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="downarrow__image"
                                        src={Decrease_Arrow}
                                        alt=""
                                    ></img>
                                    <div className="font__size">6.45%</div>
                                </div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="downarrow__image"
                                        src={Decrease_Arrow}
                                        alt=""
                                    ></img>
                                    <div className="font__size">6.45%</div>
                                </div>
                            </td>
                            <td>
                                <div className="font__size">
                                    $571,123,345,234
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <div className="font__size">
                                        $654,231,432,321
                                    </div>
                                    <div className="font__fade">
                                        $732,574,345
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <span className="font__size">
                                        $654,231,432,321
                                    </span>
                                    <span className="spacing__btc font__size">
                                        BTC
                                    </span>
                                    <div>
                                        <progress></progress>
                                    </div>

                                    <div></div>
                                </div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="graph__image"
                                        src={Grapgh}
                                        alt=""
                                    ></img>
                                    <img
                                        className="more__icon"
                                        src={More_Icon}
                                        alt=""
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        <tr className="table__body--row">
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="watchlist__star"
                                        src={Watchlist_Outline}
                                        alt=""
                                    ></img>
                                    <span className="font__size">01</span>
                                </div>
                            </td>

                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="coins__image"
                                        src={Bitcoin}
                                        alt=""
                                    ></img>
                                    <div className="spacing font__size">
                                        Bitcoin
                                    </div>
                                    <div className="spacing font__fade">
                                        BTC
                                    </div>
                                    <button className="buy__button">Buy</button>
                                </div>
                            </td>

                            <td>
                                <div className="font__size">$276,435,232</div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="downarrow__image"
                                        src={Decrease_Arrow}
                                        alt=""
                                    ></img>
                                    <div className="font__size">6.45%</div>
                                </div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="downarrow__image"
                                        src={Decrease_Arrow}
                                        alt=""
                                    ></img>
                                    <div className="font__size">6.45%</div>
                                </div>
                            </td>
                            <td>
                                <div className="font__size">
                                    $571,123,345,234
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <div className="font__size">
                                        $654,231,432,321
                                    </div>
                                    <div className="font__fade">
                                        $732,574,345
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    <span className="font__size">
                                        $654,231,432,321
                                    </span>
                                    <span className="spacing__btc font__size">
                                        BTC
                                    </span>
                                    <div>
                                        <progress></progress>
                                    </div>

                                    <div></div>
                                </div>
                            </td>
                            <td>
                                <div className="display__table--cell">
                                    <img
                                        className="graph__image"
                                        src={Grapgh}
                                        alt=""
                                    ></img>
                                    <img
                                        className="more__icon"
                                        src={More_Icon}
                                        alt=""
                                    ></img>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
