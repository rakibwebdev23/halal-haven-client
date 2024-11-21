import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    });

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: `${user.name} is an admin Now!`,
                        showClass: {
                            popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                            popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                    });
                }
            })
    }

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        // console.log(res.data);

                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h2 className="text-4xl font-bold">Total Users: {users.length}</h2>

            <div className="overflow-x-auto w-full mt-14">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-bold bg-orange-400">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}
                                    className="bg-gray-300"
                                >
                                    <td className="font-bold">{index + 1}</td>
                                    <td className="font-bold">{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-orange-500 text-white text-xl btn-md font-bold hover:text-orange-500"><FaUsers></FaUsers></button>}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className="btn bg-red-600 text-white text-xl btn-md font-bold hover:text-red-600"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;