import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        axiosSecure.post("/create-payment-intent", {price: totalPrice})
            .then(res => {
            console.log("stripe client secret",res.data.clientSecret);
        })
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        });

        if (error) {
            setError(error.message);
        }
        else {
            console.log("payment method success", paymentMethod);
            setError('');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#708090',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {error && <p className="text-red-600 mt-4 border-2  border-orange-500 w-1/2 mx-auto rounded-r-full rounded-t-full">{ error}</p>}
                <button className="bg-orange-600 px-20 py-2 mt-14 text-white font-bold hover:bg-orange-300 rounded-lg hover:text-orange-600" type="submit" disabled={!stripe}>
                    Pay Now
                </button>
            </form>
        </div>
    );
};

export default CheckOut;