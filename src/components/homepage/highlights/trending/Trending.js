import React from 'react';
import { Link } from 'react-router-dom';
import ReadMore from '../read-more/ReadMore';
import TrendingIcon from '../../../../assets/homepage/highlights/trending/Tranding_Icon.png';
import UpIcon from '../../../../assets/homepage/highlights/trending/Increase_Arrow.svg';
import DownIcon from '../../../../assets/homepage/highlights/trending/Decrease_Arrow.svg';

//Importing table icons
import Satoshi from '../../../../assets/homepage/highlights/trending/Satoshi Token_Icon.svg';
import Spice from '../../../../assets/homepage/highlights/trending/Spice Trade_Icon.svg';
import Terra from '../../../../assets/homepage/highlights/trending/Terra Classic_Icon.svg';

const Trending = () => {
    return (
        <section className="highlights__card--wrapper ">
            {/* Heading section */}

            <div className="highlights__heading container-fluid d-flex justify-content-between align-items-center py-3 px-4 ">
                <div className="highlights__title d-flex justify-content-center align-items-center">
                    <img
                        src={TrendingIcon}
                        alt="icon"
                        className="highlights__title-icon me-3"
                    />
                    <span className="text-nowrap lh-lg">Trending</span>
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
                            <td className=" w-100 d-flex justify-content-between align-items-center border-bottom-0">
                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="highlights__currency--slno px-2">
                                        01
                                    </span>
                                    <span className="pe-2">
                                        <img
                                            src={Satoshi}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        Terra Classic
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block  d-lg-none d-xl-block">
                                        LUNC
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
                                            src={Spice}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        Green Satoshi Token (SOL)
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block  d-lg-none d-xl-block">
                                        GST
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <img
                                        src={DownIcon}
                                        alt="icon"
                                        className="percent__change--downicon pe-2"
                                    />
                                    <span className="percent__change--value-down">
                                        10.82%
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
                                            src={Terra}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        Terra Classic
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block d-lg-none d-xl-block">
                                        LUNC
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
                                            src={Spice}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        Green Satoshi Token (SOL)
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block d-lg-none d-xl-block">
                                        GST
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <img
                                        src={DownIcon}
                                        alt="icon"
                                        className="percent__change--downicon pe-2"
                                    />
                                    <span className="percent__change--value-down">
                                        10.82%
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
                                            src={Spice}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        Sweet SOL
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block d-lg-none d-xl-block">
                                        SSOL
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <img
                                        src={DownIcon}
                                        alt="icon"
                                        className="percent__change--downicon pe-2"
                                    />
                                    <span className="percent__change--value-down">
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
                                            src={Terra}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        Terra Classic
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block d-lg-none d-xl-block">
                                        LUNC
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
                                            src={Spice}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        Sweet SOL
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block d-lg-none d-xl-block">
                                        SSOL
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <img
                                        src={DownIcon}
                                        alt="icon"
                                        className="percent__change--downicon pe-2"
                                    />
                                    <span className="percent__change--value-down">
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

export default Trending;
