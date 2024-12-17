import { CardNumberElement, CardExpiryElement, CardCvcElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [error, setError] = useState('');
    const [clientSecret, setClientsecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post("/create-payment-intent", { price: totalPrice })
                .then(res => {
                    setClientsecret(res.data.clientSecret);
                });
        }
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardNumber = elements.getElement(CardNumberElement);
        const cardExpiry = elements.getElement(CardExpiryElement);
        const cardCvc = elements.getElement(CardCvcElement);

        if (!cardNumber || !cardExpiry || !cardCvc) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardNumber
        });

        if (error) {
            setError(error.message);
        } else {
            setError('');
        }

        // Confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardNumber,
                billing_details: {
                    name: user?.displayName || 'Anonymous',
                    email: user?.email || 'Anonymous'
                }
            }
        });

        if (confirmError) {
            setError(confirmError.message);
        } else if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id);

            const paymentInfo = {
                email: user.email,
                price: totalPrice,
                transactionId: paymentIntent.id,
                date: new Date(),
                cartItemIds: cart.map(item => item._id),
                menuItemIds: cart.map(item => item.menuId),
                status: 'Pending'
            };

            const res = await axiosSecure.post('/payments', paymentInfo);
            if (res.data.paymentResult.insertedId) {
                refetch();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `Payment Success! Transaction ID: ${paymentIntent.id}`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/dashboard/paymentHistory");
            }
        }
    };

    return (
        <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg max-w-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Checkout</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Total Price */}
                <div className="text-center">
                    <p className="text-xl font-semibold text-gray-800">Total Payable Amount</p>
                    <p className="text-2xl font-bold text-orange-600">${totalPrice}</p>
                </div>

                {/* Card Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Card Number</label>
                        <CardNumberElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': { color: '#b1b1b1' }
                                    },
                                    invalid: { color: '#9e2146' }
                                }
                            }}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Expiry Date</label>
                        <CardExpiryElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': { color: '#b1b1b1' }
                                    },
                                    invalid: { color: '#9e2146' }
                                }
                            }}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">CVC</label>
                        <CardCvcElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': { color: '#b1b1b1' }
                                    },
                                    invalid: { color: '#9e2146' }
                                }
                            }}
                        />
                    </div>
                </div>

                {/* Error and Transaction ID */}
                {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
                {transactionId && <p className="text-green-600 mt-4 text-center">Transaction ID: {transactionId}</p>}
                <button
                    type="submit"
                    className="w-full py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition duration-300 disabled:bg-gray-300"
                    disabled={!stripe || !clientSecret}
                >
                    Pay Now
                </button>
            </form>
        </div>
    );
};

export default CheckOut;
