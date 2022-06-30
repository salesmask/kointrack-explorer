import React from 'react';
import './Product.css';

const Product = () => {
    return (
        <div class="  col-11 col-sm-5 col-md-3 col-xl ">
            <h3>Products</h3>
            <ul className="list-unstyled product_wrapper">
                <li class="mb-2">
                    <a href="#">Security Audit</a>
                </li>
                <li class="mb-2">
                    <a href="#">Skynet</a>
                </li>
                <li>
                    <a href="#">SkyTrace</a>
                </li>
                <li class="mb-2">
                    <a href="#">Penetration Testing</a>
                </li>
            </ul>
        </div>
    );
};

export default Product;
