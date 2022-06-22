import React from 'react';
import './Footer.css';
import Header_Logo from '../../assets/footer/Header_Logo.png';
import Product from './products/Product';
import Company from './company/Company';
import Resourcess from './resourcess/Resourcess';
import Contact from './contact/Contact';
import FooterLogo from './logo/FooterLogo';
import Sociallinks from './sociallinks/Sociallinks';

function Footer() {
    return (
        <>
            <div class="footer-dark ">
                <footer>
                    <div class="container-fluid">
                        <div class="row gx-5">
                            <FooterLogo />

                            <Product />

                            <Resourcess />

                            <Company />

                            <Contact />
                        </div>

                        {/* <Sociallinks/> */}
                    </div>
                </footer>
            </div>
            <div class="copyright container-fluid d-flex justify-content-center align-items-center py-3">
                <p className="copyright__content mb-0">
                    © Copyright 2021-22 www.kointrack.com
                </p>
            </div>
        </>
    );
}

export default Footer;
