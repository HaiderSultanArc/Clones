import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
    const [{ }, dispatch] = useStateValue();     // First parameter gives us current State of the Data-layer and Second one gives Dispatch

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',

            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
         });
    };

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
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
