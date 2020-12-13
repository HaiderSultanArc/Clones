import React from 'react';
import { useStateValue } from '../../StateProvider';

function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch(
            {
                type: "REMOVE_FROM_BASKET",
                id: id
            }
        );
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="Product" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map(   // Fill an Array with empty values and map through it
                            (_) => (
                                <p>⭐</p>
                            )
                        )
                    }
                </div>

                <button onClick={removeFromBasket}>Remove from Basket</button>

            </div>
            
        </div>
    )
}

export default CheckoutProduct
