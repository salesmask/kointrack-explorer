import React from 'react';

import news_big_image from '../../../../assets/coindetails/coindata/News Big Image.svg';
import bitcoin_small from '../../../../assets/coindetails/coindata/Bitcoin Small.svg';
import news_small_1 from '../../../../assets/coindetails/coindata/News Small_1.svg';
import news_small_2 from '../../../../assets/coindetails/coindata/News Small_2.svg';
import news_small_3 from '../../../../assets/coindetails/coindata/News Small_3.svg';
import readmore__arrow from '../../../../assets/coindetails/coindata/readmore_arrow.svg';

import './News.css';
const News = () => {
    return (
        <div className="">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="container-xxl px-0">
                            <div className="d-flex flex-wrap gap-3 py-5 fs-4">
                                <h2 className="text-wrap bg-opacity-100 align-items-center">
                                    Bitcoin News
                                </h2>
                                <button
                                    type="button"
                                    className="btn tab__button px-4 ms-5"
                                >
                                    All
                                </button>
                                <button
                                    type="button"
                                    className="btn tab__button  px-5"
                                >
                                    News
                                </button>
                                <button
                                    type="button"
                                    className="btn tab__button  px-5"
                                >
                                    Alexanria
                                </button>

                                <button
                                    type="button"
                                    className="btn tab__button   ms-lg-auto"
                                >
                                    Read More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="10"
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
                    </div>
                </div>
            </div>

            {/* card tiles */}

            <div className="container-fluid">
                <div className="col-11 mx-auto d-flex gap-3">
                    <div className="container-xxl px-0">
                        <div className="row gap-2">
                            <div className="col-lg-6 px-0">
                                <div className="d-flex pb-5 mx-0 ">
                                    <div className="card p-2 news__card">
                                        <img
                                            src={news_big_image}
                                            alt=""
                                        ></img>
                                        <h5 className="card-title pt-3">
                                            Bitcoin New Updates
                                        </h5>
                                        <p className="fw-bolder text-muted">
                                            Laborum exercitation laborum cillum
                                            laborumLaborum exercitation laborum
                                            cillum laborum.Laborum exercitation
                                            laborum cillum laborum
                                        </p>

                                        <div className=" d-flex flex-wrap  gap-3 gap-sm-3 gap-md-4   align-items-center">
                                            <div className="fs-4 fw-bolder">
                                                News BTC
                                            </div>
                                            <span>|</span>
                                            <div className="text-muted fw-bolder d-none d-sm-block">
                                                5 hours ago
                                            </div>
                                            <span className="d-none d-sm-block">
                                                |
                                            </span>

                                            <div
                                                href="#"
                                                className="btn news__button  fw-bold"
                                            >
                                                <img
                                                    src={bitcoin_small}
                                                    alt=""
                                                ></img>
                                                BTC
                                            </div>

                                            <div
                                                type="button"
                                                className="btn news__button   fw-bold ms-lg-auto ms-md-auto"
                                            >
                                                Read More
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="12"
                                                    height="10"
                                                    fill="currentColor"
                                                    class="bi bi-chevron-right"
                                                    viewBox="0 0 16 15"
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

                            {/* News small cards */}

                            <div className="col ">
                                <div class="row d-block">
                                    <div class="">
                                        <div className="news__card">
                                            <div className="row">
                                                <div className="col-4 col-lg-3 col-md-2 ">
                                                    <div className="card-body pt-md-4">
                                                        <div className=" rounded-5 ">
                                                            <img
                                                                src={
                                                                    news_small_1
                                                                }
                                                                alt=""
                                                            ></img>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col ps-1 pe-4 pb-3 pt-2 ps-sm-1 pe-sm-4 pb-1 pt-sm-4 pt-lg-4 ">
                                                    <h5 className="card-title fs-3 mt-2 mt-md-0 ">
                                                        Bitcoin New Updates
                                                    </h5>

                                                    <p className=" justify-content-start fw-bolder  text-muted lh-1">
                                                        Elit veniam nostrud
                                                        culpa anim commodo n
                                                        commodo non excepteur eu
                                                        dolore on excepteur eu
                                                        dolore eu dolore
                                                    </p>

                                                    <div className="d-flex  flex-wrap  gap-lg-3 gap-2 gap-md-4  align-items-center  pt-lg-3">
                                                        <div className="fs-4 fw-bolder d-flex gap-2 ">
                                                            News{' '}
                                                            <h8 className="d-none d-md-block">
                                                                BTC
                                                            </h8>
                                                        </div>

                                                        <div className="text-muted fw-bolder d-none d-sm-block ">
                                                            5 hours ago
                                                        </div>

                                                        <div
                                                            href="#"
                                                            className="btn news__button  d-flex align-items-center fw-bold"
                                                        >
                                                            <img
                                                                src={
                                                                    bitcoin_small
                                                                }
                                                                alt=""
                                                            ></img>
                                                            BTC
                                                        </div>

                                                        <div
                                                            type="button"
                                                            className=" btn news__button   fw-bold me-ms-auto me-lg-auto ms-xl-auto me-xl-0 ms-md-auto"
                                                        >
                                                            Read More
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="12"
                                                                height="10"
                                                                fill="currentColor"
                                                                class="bi bi-chevron-right"
                                                                viewBox="0 0 16 15"
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

                                    <div className="col mt-3">
                                        <div class="">
                                            <div className="news__card">
                                                <div className="row">
                                                    <div className="col-4 col-lg-3 col-md-2 ">
                                                        <div className="card-body pt-md-4">
                                                            <div className=" rounded-5 ">
                                                                <img
                                                                    src={
                                                                        news_small_2
                                                                    }
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col ps-1 pe-4 pb-3 pt-2 ps-sm-1 pe-sm-4 pb-1 pt-sm-4 pt-lg-4 ">
                                                        <h5 className="card-title fs-3 mt-2 mt-md-0 ">
                                                            Bitcoin New Updates
                                                        </h5>

                                                        <p className=" justify-content-start fw-bolder  text-muted lh-1">
                                                            Elit veniam nostrud
                                                            culpa anim commodo n
                                                            commodo non
                                                            excepteur eu dolore
                                                            on excepteur eu
                                                            dolore eu dolore
                                                        </p>

                                                        <div className="d-flex  flex-wrap  gap-lg-3 gap-2 gap-md-4  align-items-center  pt-lg-3">
                                                            <div className="fs-4 fw-bolder d-flex gap-2 ">
                                                                News{' '}
                                                                <h8 className="d-none d-md-block">
                                                                    BTC
                                                                </h8>
                                                            </div>

                                                            <div className="text-muted fw-bolder d-none d-sm-block ">
                                                                5 hours ago
                                                            </div>

                                                            <div
                                                                href="#"
                                                                className="btn news__button  fw-bold"
                                                            >
                                                                <img
                                                                    src={
                                                                        bitcoin_small
                                                                    }
                                                                    alt=""
                                                                ></img>
                                                                BTC
                                                            </div>

                                                            <div
                                                                type="button"
                                                                className=" btn news__button  fw-bold me-ms-auto me-lg-auto ms-xl-auto me-xl-0 ms-md-auto"
                                                            >
                                                                Read More
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="10"
                                                                    fill="currentColor"
                                                                    class="bi bi-chevron-right"
                                                                    viewBox="0 0 16 15"
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
                                    </div>

                                    <div class="col mt-3 mb-3">
                                        <div class="">
                                            <div className="news__card">
                                                <div className="row">
                                                    <div className="col-4 col-lg-3 col-md-2 ">
                                                        <div className="card-body pt-md-4">
                                                            <div className=" rounded-5 ">
                                                                <img
                                                                    src={
                                                                        news_small_3
                                                                    }
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col ps-1 pe-4 pb-3 pt-2 ps-sm-1 pe-sm-4 pb-1 pt-sm-4 pt-lg-4 ">
                                                        <h5 className="card-title fs-3 mt-2 mt-md-0 ">
                                                            Bitcoin New Updates
                                                        </h5>

                                                        <p className=" justify-content-start fw-bolder  text-muted lh-1">
                                                            Elit veniam nostrud
                                                            culpa anim commodo n
                                                            commodo non
                                                            excepteur eu dolore
                                                            on excepteur eu
                                                            dolore eu dolore
                                                        </p>

                                                        <div className="d-flex  flex-wrap  gap-lg-3 gap-2 gap-md-4  align-items-center  pt-lg-3">
                                                            <div className="fs-4 fw-bolder d-flex gap-2 ">
                                                                News{' '}
                                                                <h8 className="d-none d-md-block">
                                                                    BTC
                                                                </h8>
                                                            </div>

                                                            <div className="text-muted fw-bolder d-none d-sm-block ">
                                                                5 hours ago
                                                            </div>

                                                            <div
                                                                href="#"
                                                                className="btn news__button  d-flex align-items-center fw-bold"
                                                            >
                                                                <img
                                                                    src={
                                                                        bitcoin_small
                                                                    }
                                                                    alt=""
                                                                ></img>
                                                                BTC
                                                            </div>

                                                            <div
                                                                type="button"
                                                                className=" btn news__button  fw-bold  me-ms-auto me-lg-auto ms-xl-auto me-xl-0 ms-md-auto"
                                                            >
                                                                Read More
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="10"
                                                                    fill="currentColor"
                                                                    class="bi bi-chevron-right"
                                                                    viewBox="0 0 16 15"
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
