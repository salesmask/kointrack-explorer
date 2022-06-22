import React from 'react';

import news_big_image from '../../../assets/coindata/News Big Image.svg';
import bitcoin_small from '../../../assets/coindata/Bitcoin Small.svg';
import news_small_1 from '../../../assets/coindata/News Small_1.svg';
import news_small_2 from '../../../assets/coindata/News Small_2.svg';
import news_small_3 from '../../../assets/coindata/News Small_3.svg';
import './News.css';

const News = () => {
    return (
        <div className=" head-details__wrapper">
            <div className="container ">
                <div className="d-flex flex-wrap gap-3 py-5">
                    <h2 className="text-wrap bg-opacity-100 align-items-center">
                        Bitcoin News
                    </h2>
                    <button
                        type="button"
                        className=" btn rounded-pill lead px-5 ms-5 news__button"
                    >
                        All
                    </button>
                    <button
                        type="button"
                        className="btn rounded-pill news__button lead px-5"
                    >
                        News
                    </button>
                    <button
                        type="button"
                        className="btn rounded-pill news__button lead px-5"
                    >
                        Alexanria
                    </button>

                    <button
                        type="button"
                        className="btn news__button  rounded-pill px-4  ms-lg-auto  px-8"
                    >
                        Read More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* card tiles */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="d-flex pb-5 mx-0 ">
                            <div className="card p-3 news__card">
                                <img
                                    src={news_big_image}
                                    alt=""
                                ></img>
                                <h5 className="card-title pt-3">
                                    Bitcoin New Updates
                                </h5>
                                <p className="card-text fw-bolder text-muted">
                                    Laborum exercitation laborum cillum
                                    laborumLaborum exercitation laborum cillum
                                    laborum.Laborum exercitation laborum cillum
                                    laborum
                                </p>

                                <div className=" d-flex flex-wrap  gap-4 gap-sm-3 gap-md-4  align-items-center">
                                    <div className="fs-4 fw-bolder">
                                        News BTC
                                    </div>
                                    <span>|</span>
                                    <div className="text-muted fw-bolder d-none d-sm-block">
                                        5 hours ago
                                    </div>
                                    <span className="d-none d-sm-block">|</span>

                                    <div
                                        href="#"
                                        className=" btn news__button rounded-pill d-flex gap-2 py-3 fw-bold align-items-center px-3 "
                                    >
                                        <img
                                            src={bitcoin_small}
                                            alt=""
                                        ></img>
                                        BTC
                                    </div>

                                    <div
                                        type="button"
                                        className=" btn news__button rounded-pill d-flex gap-2 fw-bold align-items-center px-3 py-3 ms-lg-auto ms-md-auto"
                                    >
                                        Read More
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-chevron-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="row d-block">
                            <div class="col">
                                <div className="card news__card">
                                    <div className="row">
                                        <div className="col-4 col-lg-3 col-md-3 ">
                                            <div className="card-body ">
                                                <div className=" rounded-5 ">
                                                    <img
                                                        src={news_small_1}
                                                        alt=""
                                                    ></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col ps-1 pe-4 pb-3 pt-2 ps-sm-1 pe-sm-4 pb-1 pt-sm-4 pt-lg-4">
                                            <h5 className="card-title ">
                                                Bitcoin New Updates
                                            </h5>

                                            <p className=" fw-bolder  text-muted lh-1">
                                                Elit veniam nostrud culpa anim
                                                commodo n commodo non excepteur
                                                eu dolore on excepteur eu dolore
                                                eu dolore
                                            </p>
                                            <div className=" d-flex flex-wrap  gap-lg-3 gap-2 gap-md-3 align-items-center pt-lg-3">
                                                <div className="fs-4 fw-bolder ">
                                                    News BTC
                                                </div>

                                                <div className="text-muted fw-bolder d-none d-sm-block ">
                                                    5 hours ago
                                                </div>

                                                <div
                                                    href="#"
                                                    className="news__button btn news__button rounded-pill d-flex gap-2 fw-bold align-items-center px-3 py-3"
                                                >
                                                    <img
                                                        src={bitcoin_small}
                                                        alt=""
                                                    ></img>
                                                    BTC
                                                </div>

                                                <div
                                                    type="button"
                                                    className=" btn news__button  rounded-pill d-flex gap-0  fw-bold align-items-center py-3 px-2 me-ms-auto me-lg-auto ms-xl-auto me-xl-0"
                                                >
                                                    Read More
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-chevron-right"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">Column</div>
                            <div class="col">Column</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
