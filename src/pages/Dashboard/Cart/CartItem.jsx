import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";

const CartItem = ({ item, index }) => {

    const { _id, name, image, price } = item;
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then( async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/carts/${id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });

                }
            }
        });
    }

    return (
        <tr className="w-full">
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td className="text-xl font-bold">
                {name}
            </td>
            <td className="font-bold"><span className="text-orange-600">$</span> {price}</td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-lg text-red-600 font-bold"><RiDeleteBin6Line></RiDeleteBin6Line></button>
            </td>
        </tr>
    );
};

export default CartItem;