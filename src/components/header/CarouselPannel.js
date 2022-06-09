import React from 'react';
import './CarouselPannel.css';
import Header_BG_with_vector from '../../assets/header/Header_BG_with_vector.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselPannel() {
    return (
        <div>
            <div>
                <Carousel
                    className="slider__panel"
                    showArrows={false}
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    <div className="slider__view">
                        <h1 className="content__h1">
                            Why bitcoin is so valuable in Reacent Times ?
                        </h1>
                        <p className="content__p">
                            lorem Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industry's ever since 1550s
                        </p>
                    </div>
                    <div className="slider__view">
                        <h1 className="content__h1">
                            Why bitcoin is so valuable in Reacent Times ?
                        </h1>
                        <p className="content__p">
                            lorem Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industry's ever since 1550s
                        </p>
                    </div>
                    <div className="slider__view">
                        <h1 className="content__h1">
                            Why bitcoin is so valuable in Reacent Times ?
                        </h1>
                        <p className="content__p">
                            lorem Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industry's ever since 1550s
                        </p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
