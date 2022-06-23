import React from 'react';
import './Product.css';

const Product = () => {
    return (
        <div class="col lh-lg  ">
            <h3>Products</h3>
            <ul className="product_wrapper">
                <li>
                    <a href="#">Security Audit</a>
                </li>
                <li>
                    <a href="#">Skynet</a>
                </li>
                <li>
                    <a href="#">SkyTrace</a>
                </li>
                <li>
                    <a href="#">Penetration Testing</a>
                </li>
            </ul>
        </div>
    );
};

export default Product;
