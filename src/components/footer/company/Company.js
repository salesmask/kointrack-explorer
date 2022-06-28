import React from 'react';
import './Company.css';

const Company = () => {
    return (
        <div class="col-6 col-lg-2 mb-3 ">
            <h3>Company</h3>
            <ul className="company_wrapper">
                <li class="mb-2">
                    <a href="#">About</a>
                </li>
                <li class="mb-2">
                    <a href="#">Careers</a>
                </li>
                <li class="mb-2">
                    <a href="#">Disclaimer</a>
                </li>
                <li class="mb-2">
                    <a href="#">Privacy Policy</a>
                </li>
                <li class="mb-2">
                    <a href="#">Cookie Policy</a>
                </li>
                <li class="mb-2">
                    <a href="#">Terms and Conditions</a>
                </li>
            </ul>
        </div>
    );
};

export default Company;
