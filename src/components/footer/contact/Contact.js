import React from 'react';
import './Contact.css';
import Mail_Logo from '../../../assets/footer/Mail.png';
import Call_Logo from '../../../assets/footer/Call.png';
import Place from '../../../assets/footer/Place.png';

const Contact = () => {
    return (
        <div className="footer__contact">
            <ul>
                <h3 className="footer_heading">Contact</h3>
                <div className="footer_line_height">
                    <li>
                        <a href="">
                            <img
                                src={Mail_Logo}
                                className="mail_logo"
                            />
                            info@kaudi.com
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img
                                src={Call_Logo}
                                className="call_logo"
                            />{' '}
                            +91-1234567890
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img
                                src={Place}
                                className="place_logo"
                            />{' '}
                            465, Lorem Ipsum is simply 171 dummy text of the
                            printing and type industry.
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default Contact;
