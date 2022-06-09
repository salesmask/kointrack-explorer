import React from 'react';
import './Product.css';

const Product = () => {
    return (
        <div className="footer__product">
            <ul>
                <h3 className="footer_heading">Products</h3>
                <div className="footer_line_height">
                    <li>
                        <a href="">Security Audit</a>
                    </li>
                    <li>
                        <a href="">Skynet</a>
                    </li>
                    <li>
                        <a href="">SkyTrace</a>
                    </li>
                    <li>
                        <a href="">Penetration Testing</a>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default Product;
