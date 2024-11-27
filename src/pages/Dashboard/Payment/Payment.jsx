import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
const Payment = () => {
    return (
        <div>
            <SectionTitle title="payment and eating" subTitle="payment here"></SectionTitle>
            <div className="lg:mt-20 mt-14 lg:w-3/4 w-full bg-orange-300 shadow-2xl lg:p-6 p-2 rounded-xl text-center mx-auto">
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;