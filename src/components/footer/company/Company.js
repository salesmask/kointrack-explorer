import React from 'react';
import './Company.css';

const Company = () => {
    return (
        <div class="col-11 col-sm-5  col-md-4   col-xl ">
            <h3>Company</h3>
            <ul className="company_links-wrapper pt-4">
                <li class="mb-3">
                    <a href="#">About</a>
                </li>
                <li class="mb-3">
                    <a href="#">Careers</a>
                </li>
                <li class="mb-3">
                    <a href="#">Disclaimer</a>
                </li>
                <li class="mb-3">
                    <a href="#">Privacy Policy</a>
                </li>
                <li class="mb-3">
                    <a href="#">Cookie Policy</a>
                </li>
                <li class="mb-3">
                    <a
                        href="#"
                        className="text-nowrap"
                    >
                        Terms and Conditions
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Company;
