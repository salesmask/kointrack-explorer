import React , {useState , useRef , useEffect} from 'react';
import "./Header.css"
import header_logo from "../../assests/header/Header_Logo.png"
import header_search_icon from "../../assests/header/Header_Search_Icon.png"
import Header_BG_with_vector from "../../assests/header/Header_BG_with_vector.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Header = () => {



    return (
        <div>
            <div className="header__container">
                <div className='header__box'>
                    <div className='header__logo'>
                        <img src={header_logo} alt="Kointrack" /><a className="nav-link" href="#"></a>
                    </div>
                    <div >

                        <select className='select__coin'>
                                <option selected value="coin"><a className="nav-link" href="#">Coin</a></option>
                                <option value=""><a className="nav-link" href="#">Link</a></option>
                                <option value="coconut"><a className="nav-link" href="#">Link</a></option>
                                <option value="mango"><a className="nav-link" href="#">Link</a></option>
                        </select>
                        </div>

                    <div><a className="nav-link" href="#">Exchange</a></div>
                    <div><a className="nav-link" href="#">Portfolio</a></div>
                    <div >
                        <select className='select__product'>
                            <option selected value="portfolio"><a className="nav-link" href="#">Products</a></option>
                            <option value=""><a className="nav-link" href="#">Link</a></option>
                            <option value="coconut"><a className="nav-link" href="#">Link</a></option>
                            <option value="mango"><a className="nav-link" href="#">Link</a></option>
                        </select>
                    </div>
                    <div className='left__headerwrapper'>
                    <div>
                        <img src={header_search_icon} alt="header-icon"></img>
                    </div>

                    <div className='sign__up display__center'>
                        <a href="#" >Sign Up</a></div>

                    <div className='log__in display__center'><a href="#">Log In </a></div>
                    </div>






                </div>
                <hr className='hr'></hr>

                <div>
                    <Carousel className='slider__panel' showArrows={false} showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false}>
                        <div className='slider__view'>
                                <h1 className='content__h1'>Why bitcoin is so valuable in Reacent Times ?</h1>
                          <p className='content__p'>lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ever since 1550s</p>
                        </div>
                        <div className='slider__view'>
                            <h1 className='content__h1'>Why bitcoin is so valuable in Reacent Times ?</h1>
                            <p className='content__p'>lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ever since 1550s</p>
                        </div>
                        <div className='slider__view'>
                            <h1 className='content__h1'>Why bitcoin is so valuable in Reacent Times ?</h1>
                            <p className='content__p'>lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ever since 1550s</p>
                        </div>


                    </Carousel>


                </div>


            </div>

        </div>
    );
};

export default Header;
