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
                    <li className="contact_mail_logo_list">
                        <a href="">
                            <img
                                src={Mail_Logo}
                                className="mail_logo"
                            />
                            <span>info@kaudi.com</span>
                        </a>
                    </li>
                    <li className="contact_call_logo_list">
                        <a href="">
                            <img
                                src={Call_Logo}
                                className="call_logo"
                            />{' '}
                            <span>+91-1234567890</span>
                        </a>
                    </li>
                    <li className="contact_place_logo_list">
                        <a
                            href=""
                            className="contact_text"
                        >
                            <img
                                src={Place}
                                className="place_logo"
                            />{' '}
                            <div className="place_address">
                                465, Lorem Ipsum is simply 171 dummy text of the
                                printing and type industry.
                            </div>
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default Contact;
