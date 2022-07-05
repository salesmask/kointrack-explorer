import React from 'react';
import './CarouselPannel.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header_BG_with_vector from '../../assets/header/Header_BG_with_vector.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import 'bootstrap/dist/js/bootstrap.js';
import { Carousel } from 'react-responsive-carousel';

import vector1 from '../../assets/header/Header_BG_with_vector.png';
import vector2 from '../../assets/header/Header_BG_with_vector_2.png';
import vector3 from '../../assets/header/Header_BG_with_vector_.3.png';

export default function CarouselPannel() {
    return (
        <div className="">
            <div
                id="carouselExample"
                class="carousel slide"
                data-bs-ride="carousel"
            >
                <div class="carousel-indicators py-3">
                    <button
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div class="carousel-inner ">
                    <div class="carousel-item active">
                        <div class="carousel-caption col-lg-7 col-7">
                            <h1 className="font__header">
                                {' '}
                                Why bitcoin is so valuable in Recent Times ?
                            </h1>
                            <p className="font__paragraph ">
                                lorem Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's ever since 1550s
                            </p>
                        </div>

                        <img
                            src={vector1}
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-caption col-lg-7 col-7">
                            <h1 className="font__header">
                                A Guide to Build Your Crypto Portfolio
                            </h1>
                            <p className="font__paragraph ">
                                lorem Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's ever since 1550s
                            </p>
                        </div>
                        <img
                            src={vector2}
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-caption col-lg-7 col-7">
                            <h1 className="font__header">
                                How Crypto Enable Economical Freedom
                            </h1>
                            <p className="font__paragraph ">
                                lorem Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's ever since 1550s
                            </p>
                        </div>
                        <img
                            src={vector3}
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
            </div>
        </div>
    );
}
