import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });

    return (
        <div>
            <SectionTitle title="Payment History" subTitle="at a glance"></SectionTitle>
            <h1 className="mt-10 text-4xl font-bold">Total Payments: {payments.length}</h1>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead className="bg-orange-400 lg:text-xl font-bold">
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Transaction Id</th>
                            <th>Total Price</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr
                                className="bg-gray-300"
                                key={payment._id}>
                                <td className="font-bold">{ index + 1}</td>
                                <td>{ payment.email}</td>
                                <td>{ payment.transactionId}</td>
                                <td>$ { payment.price}</td>
                                <td className="text-green-600">{ payment.status}......</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;