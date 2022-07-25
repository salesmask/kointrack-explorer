import React from 'react';
import './Videos.css';
import like from '../../assets/video/like.svg';
import comments from '../../assets/video/comment.svg';
import ReactPlayer from 'react-player/lazy';

const Videos = () => {
    return (
        <div>
            <div className="container-fluid video__background py-5">
                <div className="row">
                    <div className="col-11 mx-auto px-0">
                        <div className="container-xxl">
                            <div className="video__title d-flex justify-content-center ">
                                Explainer Videos
                            </div>
                            <p className="title__text d-flex justify-content-center text-muted">
                                Kointrack is the easiest place to buy and sell
                                cryptocurrency. Sign up and get started today.
                            </p>
                            <div className="mt-5">
                                <div className="row gap-4">
                                    {/* fist card */}
                                    <div className="col-sm-12 col-lg box__shadow">
                                        <div className="px-0">
                                            <ReactPlayer
                                                className="px-0 video__space"
                                                url="https://www.youtube.com/embed/hoLGKwUD2D8"
                                                controls
                                                loop
                                                muted
                                                pip
                                                onError
                                            />
                                            {/* <iframe
                                                width="853"
                                                height="480"
                                                className="px-0 video__space"
                                                src="https://www.youtube.com/embed/hoLGKwUD2D8"
                                                title="Ponzi and Pyramid Scheme Explained | Kointrack"
                                                frameborder="0"
                                              
                                                allow="accelerometer; autoplay={1}; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen
                                            ></iframe> */}
                                        </div>
                                        <div className="container px-0">
                                            <div className="card__title">
                                                What are Blockchain Bridge?
                                            </div>
                                            <p className="card__para">
                                                Buy, sell & trade digital assets
                                                with amazing ease, confidence
                                                and trust.
                                            </p>

                                            <hr></hr>
                                            <div className="d-flex align-items-center pb-3">
                                                <div className="d-flex align-items-center gap-2">
                                                    <img
                                                        src={comments}
                                                        alt="comment"
                                                    ></img>
                                                    <div className="fw-bolder card__bottom--text">
                                                        225
                                                    </div>
                                                </div>

                                                <div className="ms-3 d-flex align-items-center gap-2">
                                                    <img
                                                        src={like}
                                                        alt="comment"
                                                    ></img>
                                                    <div className="fw-bolder card__bottom--text">
                                                        1k
                                                    </div>
                                                </div>

                                                <div className="ms-auto ">
                                                    <div className="fw-bolder card__bottom--text">
                                                        2 Hours ago
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* second card */}
                                    <div className="col-sm-12 col-lg box__shadow">
                                        <div className="px-0">
                                            <ReactPlayer
                                                className="px-0 video__space"
                                                url="https://www.youtube.com/embed/yv5gzPyASo4"
                                                controls
                                                loop
                                                muted
                                                pip
                                                onError
                                            />
                                            {/* <iframe
                                                className="px-0 video__space"
                                                width="853"
                                                height="480"
                                                src="https://www.youtube.com/embed/yv5gzPyASo4"
                                                title="Welcome to KOINTRACK"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen
                                            ></iframe> */}
                                        </div>
                                        <div className="container px-0">
                                            <div className="card__title">
                                                Why Bitcoin is so Valuable in
                                                Recent...
                                            </div>
                                            <p className="card__para">
                                                Buy, sell & trade digital assets
                                                with amazing ease, confidence
                                                and trust.
                                            </p>

                                            <hr></hr>
                                            <div className="d-flex align-items-center pb-3">
                                                <div className="d-flex align-items-center gap-2">
                                                    <img
                                                        src={comments}
                                                        alt="comment"
                                                    ></img>
                                                    <div className="fw-bolder card__bottom--text">
                                                        225
                                                    </div>
                                                </div>

                                                <div className="ms-3 d-flex align-items-center gap-2">
                                                    <img
                                                        src={like}
                                                        alt="comment"
                                                    ></img>
                                                    <div className="fw-bolder card__bottom--text">
                                                        1k
                                                    </div>
                                                </div>

                                                <div className="ms-auto ">
                                                    <div className="fw-bolder card__bottom--text">
                                                        2 Days ago
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* third card */}
                                    <div className="col-sm-12 col-lg  box__shadow">
                                        <div className="px-0">
                                            <ReactPlayer
                                                className="px-0 video__space"
                                                url="https://www.youtube.com/embed/u8CereucnhY"
                                                controls
                                                loop
                                                muted
                                                pip
                                                onError
                                            />

                                            {/* <iframe
                                                className="px-0 video__space "
                                                width="853"
                                                height="480"
                                                src="https://www.youtube.com/embed/u8CereucnhY"
                                                title="What Is Stellar | Kointrack"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen
                                            ></iframe> */}
                                        </div>
                                        <div className="container px-0">
                                            <div className="card__title">
                                                Crypto Trends Of 2022
                                            </div>
                                            <p className="card__para">
                                                Buy, sell & trade digital assets
                                                with amazing ease, confidence
                                                and trust.
                                            </p>

                                            <hr></hr>
                                            <div className="d-flex align-items-center pb-3">
                                                <div className="d-flex align-items-center gap-2">
                                                    <img
                                                        src={comments}
                                                        alt="comment"
                                                    ></img>
                                                    <div className="fw-bolder card__bottom--text">
                                                        225
                                                    </div>
                                                </div>

                                                <div className="ms-3 d-flex align-items-center gap-2">
                                                    <img
                                                        src={like}
                                                        alt="comment"
                                                    ></img>
                                                    <div className="fw-bolder card__bottom--text">
                                                        1k
                                                    </div>
                                                </div>

                                                <div className="ms-auto ">
                                                    <div className="fw-bolder card__bottom--text">
                                                        2 Hours ago
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-5">
                                    <div className="tab__button">
                                        View More Videos
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

export default Videos;
