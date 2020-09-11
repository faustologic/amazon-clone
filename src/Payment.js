import React, { useState, useEffect } from 'react'
import "./Payment.css"
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();

    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const[processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true); //Allows to store the payment on the stripe app

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer

        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                // stripe expects the total in a currencies subunits, it has to be * 100
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();

    }, [basket])

    console.log("THE SECRET IS >>>>", clientSecret)
    //console.log(getBasketTotal(basket));
    //console.log(succeeded);
    //console.log("😎", user)


    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault(); // Avoid reload the page
        setProcessing(true); //Avoids press the button more than 1 time

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replaceState("/orders") // this action set us to a order payment place
        })

    }

    const handleChange = event => {
        // Listen for changes in the cardElement, adn display any error as the customer types their card.
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }


    return (
        <div className="payment">
            <div className="payment__container">
                    <h1>Checkout (<Link to="/checkout">{basket?.length} items
                    </Link>)
                </h1>

                {/* Payment Section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Av. Belisario Porras</p>
                        <p>PH Oasis Tower</p>
                        <p>Apt 8B, Panamá</p>
                    </div>
                </div>

                {/* Payment Section - Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            // We use the code for the checkoutProduct
                            <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment Section - Payment Method */}
                <div className="payment__section">
                    <h3>Payment Method</h3>

                    <div className="payment__details">
                        {/* Stripe magic will go */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                    <>
                                        <h3>
                                        <strong>Order Total: {`${value}`}</strong>
                                        </h3>
                                    </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} 
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>   
                            </div>
                                {/* Errors */}
                                {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Payment
