import React from 'react';
import './Footer.css';
import Header_Logo from '../../assets/footer/Header_Logo.png';
import Product from './products/Product';
import Company from './company/Company';
import Resourcess from './resourcess/Resourcess';
import Contact from './contact/Contact';
import FooterLogo from './logo/FooterLogo';

function Footer() {
    return (
        <>
            <footer>
                <div class="footer__wrapper container-fluid py-5 px-0 ">
                    <div class="row  py-5 mx-0 ">
                        <div className="col-11 mx-auto d-flex flex-wrap px-0 gap-5">
                            <FooterLogo />

                            <Product />

                            <Resourcess />

                            <Company />

                            <Contact />
                        </div>
                    </div>
                </div>
            </footer>

            {/* copyright section */}

            <div class="copyright container-fluid d-flex justify-content-center align-items-center py-3">
                <p className="copyright__content mb-0">
                    © Copyright 2021-22 www.kointrack.com
                </p>
            </div>
        </>
    );
}

export default Footer;
