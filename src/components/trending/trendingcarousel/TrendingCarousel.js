import React from 'react';
import './TrendingCarousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselCardImg from '../../../assets/trending/carousel-card-image.png';

const TrendingCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="corousel__wrapper container-fluid px-0">
            <div className="row mx-0">
                <div className="col-11 mx-auto carousel__inner--wrapper">
                    <Slider {...settings}>
                        {/* Card 1 */}

                        <div className="carousel__card--wrapper p-3 d-flex justify-content-center align-items-center gap-4">
                            <div className="image__wrapper">
                                <img
                                    src={CarouselCardImg}
                                    alt="img"
                                />
                            </div>
                            <div className="content__wrapper">
                                <h3 className="heading">Crypto Deep Dive 1</h3>
                                <p className="description">
                                    How Can Bitcoin Become Legal Tender
                                </p>
                                <button className="view-button">View</button>
                            </div>
                        </div>

                        {/* Card 2 */}

                        <div className="carousel__card--wrapper p-3 d-flex justify-content-center align-items-center gap-4">
                            <div className="image__wrapper">
                                <img
                                    src={CarouselCardImg}
                                    alt="img"
                                />
                            </div>
                            <div className="content__wrapper">
                                <h3 className="heading">Crypto Deep Dive 2</h3>
                                <p className="description">
                                    How Can Bitcoin Become Legal Tender
                                </p>
                                <button className="view-button">View</button>
                            </div>
                        </div>

                        {/* Card 3 */}

                        <div className="carousel__card--wrapper p-3 d-flex justify-content-center align-items-center gap-4">
                            <div className="image__wrapper">
                                <img
                                    src={CarouselCardImg}
                                    alt="img"
                                />
                            </div>
                            <div className="content__wrapper">
                                <h3 className="heading">Crypto Deep Dive 3</h3>
                                <p className="description">
                                    How Can Bitcoin Become Legal Tender
                                </p>
                                <button className="view-button">View</button>
                            </div>
                        </div>

                        {/* Card 4 */}

                        <div className="carousel__card--wrapper p-3 d-flex justify-content-center align-items-center gap-4">
                            <div className="image__wrapper">
                                <img
                                    src={CarouselCardImg}
                                    alt="img"
                                />
                            </div>
                            <div className="content__wrapper">
                                <h3 className="heading">Crypto Deep Dive 4</h3>
                                <p className="description">
                                    How Can Bitcoin Become Legal Tender
                                </p>
                                <button className="view-button">View</button>
                            </div>
                        </div>

                        {/* Card 5 */}

                        <div className="carousel__card--wrapper p-3 d-flex justify-content-center align-items-center gap-4">
                            <div className="image__wrapper">
                                <img
                                    src={CarouselCardImg}
                                    alt="img"
                                />
                            </div>
                            <div className="content__wrapper">
                                <h3 className="heading">Crypto Deep Dive 5</h3>
                                <p className="description">
                                    How Can Bitcoin Become Legal Tender
                                </p>
                                <button className="view-button">View</button>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default TrendingCarousel;
