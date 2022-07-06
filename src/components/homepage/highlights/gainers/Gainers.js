import React from 'react';
import { Link } from 'react-router-dom';

// import '../HighlightCards.css';
import ReadMore from '../read-more/ReadMore';
import GainerIcon from '../../../../assets/homepage/highlights/gainers/Gainers_Icon.svg';
import UpIcon from '../../../../assets/homepage/highlights/gainers/Increase_Arrow.svg';
import DownIcon from '../../../../assets/homepage/highlights/gainers/Decrease_Arrow.svg';

//Importing table icons
import Road from '../../../../assets/homepage/highlights/gainers/ROAD_Icon.svg';
import Sweet from '../../../../assets/homepage/highlights/gainers/Sweet SOL_Icon.svg';
import TNC from '../../../../assets/homepage/highlights/gainers/TNC Coin_Icon.svg';

const Gainers = () => {
    return (
        <section className="highlights__card--wrapper">
            {/* Heading section */}

            <div className="highlights__heading container-fluid d-flex justify-content-between align-items-center py-3 px-4">
                <div className="highlights__title d-flex justify-content-center align-items-center">
                    <img
                        src={GainerIcon}
                        alt="icon"
                        className="highlights__title-icon me-3"
                    />
                    <span className="text-nowrap lh-lg">Biggest Gainers</span>
                </div>
                <div className="highlights__readmore">
                    <ReadMore />
                </div>
            </div>

            {/* Table section */}

            <table className="highlights__table table mx-auto mb-0">
                <tbody className="d-block mt-3">
                    {/* Row one */}

                    <tr
                        className="w-100 d-flex justify-content-center align-items-center mb-3 border-bottom-0"
                        role="button"
                    >
                        <Link
                            to="/coindetails"
                            className="w-100"
                        >
                            <td className="w-100 d-flex justify-content-between align-items-center border-bottom-0">
                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="highlights__currency--slno px-2">
                                        01
                                    </span>
                                    <span className="pe-2">
                                        <img
                                            src={Road}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        ROAD
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block  d-lg-none d-xl-block">
                                        ROAD
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <img
                                        src={UpIcon}
                                        alt="icon"
                                        className="percent__change--upicon pe-2"
                                    />
                                    <span className="percent__change--value-up">
                                        10.82%
                                    </span>
                                </div>
                            </td>
                        </Link>
                    </tr>

                    {/* Row two */}

                    <tr
                        className="w-100 d-flex justify-content-center align-items-center mb-3 border-bottom-0"
                        role="button"
                    >
                        <Link
                            to="/coindetails"
                            className="w-100"
                        >
                            <td className=" w-100 d-flex justify-content-between align-items-center border-bottom-0">
                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="highlights__currency--slno px-2">
                                        02
                                    </span>
                                    <span className="pe-2">
                                        <img
                                            src={Sweet}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        Sweet SOL
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block  d-lg-none d-xl-block">
                                        SSOL
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <img
                                        src={UpIcon}
                                        alt="icon"
                                        className="percent__change--upicon pe-2"
                                    />
                                    <span className="percent__change--value-up">
                                        11.1%
                                    </span>
                                </div>
                            </td>
                        </Link>
                    </tr>

                    {/* Row three */}

                    <tr
                        className="w-100 d-flex justify-content-center align-items-center mb-3 border-bottom-0"
                        role="button"
                    >
                        <Link
                            to="/coindetails"
                            className="w-100"
                        >
                            <td className=" w-100 d-flex justify-content-between align-items-center border-bottom-0">
                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="highlights__currency--slno px-2">
                                        03
                                    </span>
                                    <span className="pe-2">
                                        <img
                                            src={Road}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        ROAD
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block  d-lg-none d-xl-block">
                                        ROAD
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <img
                                        src={UpIcon}
                                        alt="icon"
                                        className="percent__change--upicon pe-2"
                                    />
                                    <span className="percent__change--value-up">
                                        10.82%
                                    </span>
                                </div>
                            </td>
                        </Link>
                    </tr>

                    {/* Row four */}

                    <tr
                        className="w-100 d-flex justify-content-center align-items-center mb-3 border-bottom-0"
                        role="button"
                    >
                        <Link
                            to="/coindetails"
                            className="w-100"
                        >
                            <td className=" w-100 d-flex justify-content-between align-items-center border-bottom-0">
                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="highlights__currency--slno px-2">
                                        04
                                    </span>
                                    <span className="pe-2">
                                        <img
                                            src={Sweet}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        Sweet SOL
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block  d-lg-none d-xl-block">
                                        SSOL
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <img
                                        src={UpIcon}
                                        alt="icon"
                                        className="percent__change--upicon pe-2"
                                    />
                                    <span className="percent__change--value-up">
                                        11.1%
                                    </span>
                                </div>
                            </td>
                        </Link>
                    </tr>

                    {/* Row five */}

                    <tr
                        className="w-100 d-flex justify-content-center align-items-center mb-3 border-bottom-0"
                        role="button"
                    >
                        <Link
                            to="/coindetails"
                            className="w-100"
                        >
                            <td className=" w-100 d-flex justify-content-between align-items-center border-bottom-0">
                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="highlights__currency--slno px-2">
                                        05
                                    </span>
                                    <span className="pe-2">
                                        <img
                                            src={TNC}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        TNC Coin
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block  d-lg-none d-xl-block">
                                        TNC
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <img
                                        src={UpIcon}
                                        alt="icon"
                                        className="percent__change--upicon pe-2"
                                    />
                                    <span className="percent__change--value-up">
                                        8.45%
                                    </span>
                                </div>
                            </td>
                        </Link>
                    </tr>

                    {/* Row six */}

                    <tr
                        className="w-100 d-flex justify-content-center align-items-center mb-3 border-bottom-0"
                        role="button"
                    >
                        <Link
                            to="/coindetails"
                            className="w-100"
                        >
                            <td className=" w-100 d-flex justify-content-between align-items-center border-bottom-0">
                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="highlights__currency--slno px-2">
                                        06
                                    </span>
                                    <span className="pe-2">
                                        <img
                                            src={Road}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        ROAD
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block  d-lg-none d-xl-block">
                                        ROAD
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <img
                                        src={UpIcon}
                                        alt="icon"
                                        className="percent__change--upicon pe-2"
                                    />
                                    <span className="percent__change--value-up">
                                        10.82%
                                    </span>
                                </div>
                            </td>
                        </Link>
                    </tr>

                    {/* Row seven */}
                    <tr
                        className="w-100 d-flex justify-content-center align-items-center mb-3 border-bottom-0"
                        role="button"
                    >
                        <Link
                            to="/coindetails"
                            className="w-100"
                        >
                            <td className=" w-100 d-flex justify-content-between align-items-center border-bottom-0">
                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="highlights__currency--slno px-2">
                                        07
                                    </span>
                                    <span className="pe-2">
                                        <img
                                            src={TNC}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        TNC Coin
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block  d-lg-none d-xl-block">
                                        TNC
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <img
                                        src={UpIcon}
                                        alt="icon"
                                        className="percent__change--upicon pe-2"
                                    />
                                    <span className="percent__change--value-up">
                                        8.45%
                                    </span>
                                </div>
                            </td>
                        </Link>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Gainers;
