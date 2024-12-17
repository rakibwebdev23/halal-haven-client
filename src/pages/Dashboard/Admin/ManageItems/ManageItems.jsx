import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import useMenu from "../../../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteUser = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    return (
        <div>
            <SectionTitle title="Manage all items" subTitle="show all items"></SectionTitle>
            <h1 className="lg:text-4xl text-2xl font-bold mt-6 text-center">Total Items: {menu.length}</h1>
            <div className="overflow-x-auto">
                <table className="table mt-4">
                    {/* head */}
                    <thead className="bg-orange-400 lg:text-lg font-bold">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold lg:text-base text-sm">
                                    {item.name}
                                </td>
                                <td className="font-bold text-sm lg:text-base">$ {item.price}</td>
                                <td>
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                        <button className="btn bg-orange-400 text-white text-xl btn-md font-bold hover:text-orange-500"><FaEdit></FaEdit></button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(item)} className="btn bg-red-600 text-white text-xl btn-md font-bold hover:text-red-600"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;