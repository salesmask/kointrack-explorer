import React from 'react';
import './Company.css';

const Company = () => {
    return (
        <div class="col lh-lg ">
            <h3>Company</h3>
            <ul className="company_wrapper">
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Careers</a>
                </li>
                <li>
                    <a href="#">Disclaimer</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
                <li>
                    <a href="#">Cookie Policy</a>
                </li>
                <li>
                    <a href="#">Terms and Conditions</a>
                </li>
            </ul>
        </div>
    );
};

export default Company;
