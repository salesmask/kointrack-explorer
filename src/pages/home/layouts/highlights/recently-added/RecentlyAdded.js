import React from 'react';
import { Link } from 'react-router-dom';

// import '../HighlightCards.css';
import ReadMore from '../read-more/ReadMore';
import RecentlyAddedIcon from '../../../../../assets/homepage/highlights/recently-added/Recently_Added_Icon.svg';

//Importing table icons
import Calas from '../../../../../assets/homepage/highlights/recently-added/Calaswap_Icon.svg';
import Rare from '../../../../../assets/homepage/highlights/recently-added/Rare Ball Shares_Icon.svg';
import Star from '../../../../../assets/homepage/highlights/recently-added/Star Chain_Icon.svg';

const RecentlyAdded = () => {
    return (
        <section className="highlights__card--wrapper">
            {/* Heading section */}

            <div className="highlights__heading container-fluid d-flex justify-content-between align-items-center py-3 px-4">
                <div className="highlights__title d-flex justify-content-center align-items-center">
                    <img
                        src={RecentlyAddedIcon}
                        alt="icon"
                        className="highlights__title-icon me-3"
                    />
                    <span className="text-nowrap lh-lg">Recently Added</span>
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
                                            src={Calas}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        Calaswap
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block  d-lg-none d-xl-block">
                                        CLS
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="recently__added--price">
                                        $0.09051
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
                                            src={Rare}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        Rare Ball Shares
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block  d-lg-none d-xl-block">
                                        RBS
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="recently__added--price">
                                        $0.8906
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
                                            src={Star}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        Star Chain
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block  d-lg-none d-xl-block">
                                        START1
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="recently__added--price">
                                        $0.1359
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
                                            src={Calas}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        Calaswap
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block  d-lg-none d-xl-block">
                                        CLS
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="recently__added--price">
                                        $0.09051
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
                                            src={Rare}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        Rare Ball SharesRBS
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block  d-lg-none d-xl-block">
                                        RBS
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="recently__added--price">
                                        $0.8906
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
                                            src={Star}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        Star Chain
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block  d-lg-none d-xl-block">
                                        STAR1
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="recently__added--price">
                                        $0.1359
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
                                            src={Calas}
                                            alt="icon"
                                            className="highlights__image-icon "
                                        />
                                    </span>
                                    <span className="highlights__currency--name pe-2">
                                        Calaswap
                                    </span>
                                    <span className="highlights__currency--symbol d-none d-sm-block  d-lg-none d-xl-block">
                                        CLS
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="recently__added--price">
                                        $0.09051
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

export default RecentlyAdded;
