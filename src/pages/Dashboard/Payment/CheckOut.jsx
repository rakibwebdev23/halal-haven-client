import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
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
                // console.log(res.data.clientSecret);
                setClientsecret(res.data.clientSecret);
            })
        }
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
            console.log("payment method", paymentMethod);
            setError('');
        };

        // confirm payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'anonymous'
                }
            }
        });
        if (confirmError) {
            console.log('payment not confirm', confirmError);
        }
        else {
            // console.log('payment intent', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                setTransactionId(paymentIntent.id);
                // now save the payment in the database 
                const paymetInfo = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), //utc date convert. use moment js to
                    cartItemIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'Pending'
                }
                console.log(paymetInfo);
                

                const res = await axiosSecure.post('/payments', paymetInfo);
                console.log(res.data);
                
                if (res.data.paymentResult.insertedId) {
                    refetch();
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `Your payment was successfully Paid & Transaction Id: ${paymentIntent.id}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/dashboard/paymentHistory");
                }
            }
        }
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-2">Total Pay Amount:$ {totalPrice} </h2>
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
                {
                    error && <p className="text-red-600 mt-4 border  border-red-600 w-1/2 mx-auto rounded-r-full rounded-t-full">{error}</p>
                }
                {
                    transactionId && <p className="text-green-600 mt-4 border  border-green-600 w-3/4 mx-auto rounded-r-full rounded-t-full">Your TransactionId: {transactionId}</p>
                }
                <button className="bg-orange-600 px-20 py-2 mt-14 text-white font-bold hover:bg-orange-300 rounded-lg hover:text-orange-600" type="submit" disabled={!stripe || !clientSecret}>
                    Pay Now
                </button>
            </form>
        </div>
    );
};

export default CheckOut;