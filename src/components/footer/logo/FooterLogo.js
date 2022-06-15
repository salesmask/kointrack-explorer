import React from 'react';
import './FooterLogo.css';
import Header_Logo from '../../../assets/footer/Header_Logo.png';
import Sociallinks from '../sociallinks/Sociallinks';

const FooterLogo = () => {
    return (
        <div class="col lh-lg ">
            <div className="footer_koin_logo">
                <img
                    src={Header_Logo}
                    alt="Header_Logo"
                />
            </div>
            <p className="footer_koin_info">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
            </p>
            <Sociallinks />
        </div>
    );
};

export default FooterLogo;
