import React from 'react';
import './Contact.css';
import Mail_Logo from '../../../assets/footer/Mail.png';
import Call_Logo from '../../../assets/footer/Call.png';
import Place from '../../../assets/footer/Place.png';

const Contact = () => {
    return (
        <div class="col ">
            <h3>Contact</h3>
            <ul className="contact_wrapper">
                <li>
                    <img
                        src={Mail_Logo}
                        className="mail_logo"
                    />
                    <a href="">info@kaudi.com</a>
                </li>
                <li>
                    <img
                        src={Call_Logo}
                        className="call_logo"
                    />
                    <a href="">+91-12345567890</a>
                </li>
                <li>
                    <img
                        src={Place}
                        className="place_logo"
                    />
                    <a href="">
                        465, Lorem Ipsum is simply 171 dummy text of the
                        printing and type industry.{' '}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
