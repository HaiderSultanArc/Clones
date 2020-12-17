import React from 'react';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";

function Subtotal() {
    const [{basket}] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText = {
                    (value) => (
                        <>
                            <p>
                                Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" /> This order Contains a Gift
                            </small>
                        </>
                    )
                }

                decimalScale = {2}
                value = {getBasketTotal(basket)}
                displayType = {"text"}
                thousandSeprator = {true}
                prefix = {"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
