import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();

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
            console.log("payment error issue", error);
        }
        else {
            console.log("payment method success", paymentMethod);
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
                <button className="bg-orange-600 px-20 py-2 mt-14 text-white font-bold hover:bg-orange-300 rounded-lg hover:text-orange-600" type="submit" disabled={!stripe}>
                    Pay Now
                </button>
            </form>
        </div>
    );
};

export default CheckOut;