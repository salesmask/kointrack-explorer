import React from 'react';

import news_big_image from '../../../assets/coindata/News Big Image.svg';
import bitcoin_small from '../../../assets/coindata/Bitcoin Small.svg';
import news_small_1 from '../../../assets/coindata/News Small_1.svg';
import news_small_2 from '../../../assets/coindata/News Small_2.svg';
import news_small_3 from '../../../assets/coindata/News Small_3.svg';
import './News.css';

const News = () => {
    return (
        <div>
            <section className="container">
                <div className="d-flex flex-wrap gap-4 ">
                    <h2 className="text-wrap bg-opacity-100 align-items-center">
                        Bitcoin News
                    </h2>
                    <button
                        type="button"
                        className="btn rounded-pill bg-light lead px-5 ms-5"
                    >
                        All
                    </button>
                    <button
                        type="button"
                        className="btn rounded-pill bg-light lead px-5"
                    >
                        News
                    </button>
                    <button
                        type="button"
                        className="btn rounded-pill bg-light lead px-5"
                    >
                        Alexanria
                    </button>

                    <button
                        type="button"
                        className="btn bg-light  rounded-pill px-4  ms-lg-auto  px-8"
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
            </section>

            {/* card tiles */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="d-flex pb-5 mx-0 ">
                            <div className="card p-4 rounded-5">
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

                                <div className=" d-flex flex-wrap  gap-3  align-items-center">
                                    <div className="fs-4 fw-bolder">
                                        News BTC
                                    </div>
                                    <span>|</span>
                                    <div className="text-muted fw-bolder ">
                                        5 hours ago
                                    </div>
                                    <span>|</span>

                                    <a
                                        href="#"
                                        className=" btn bg-light rounded-pill d-flex gap-2 fw-bold align-items-center px-3 "
                                    >
                                        <img
                                            src={bitcoin_small}
                                            alt=""
                                        ></img>
                                        BTC
                                    </a>

                                    <div
                                        type="button"
                                        className=" btn bg-light rounded-pill d-flex gap-2 fw-bold align-items-center px-3 ms-lg-auto "
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

                    <div className="col-6">
                        <div className="container ">
                            <div class="row row-cols-1">
                                <div class="col">
                                    <div className="card">
                                        <div className="card-body d-flex">
                                            <div className="p-2 rounded-5">
                                                <img
                                                    src={news_small_1}
                                                    alt=""
                                                ></img>
                                            </div>
                                            <h5 className="card-title mx-3 mt-3">
                                                Bitcoin New Updates
                                            </h5>
                                        </div>
                                        <p className="card-text fw-bolder text-muted">
                                            Elit veniam nostrud culpa anim
                                            commodo non excepteur eu dolore Elit
                                            veniam nostrud culpa anim commodo
                                            non excepteur eu dolore Elit veniam
                                            nostrud culpa anim commodo non
                                            excepteur eu dolore
                                        </p>
                                    </div>
                                </div>

                                <div class="col">Column</div>
                                <div class="col">Column</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
