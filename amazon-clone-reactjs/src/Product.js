import React from 'react';
import "./Product.css";

function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {
                        Array(rating).fill().map(   // Fill an Array with empty values and map through it
                            (_) => (
                                <p>⭐</p>
                            )
                        )
                    }
                </div>
            </div>

            <img src={image} alt="Product" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
