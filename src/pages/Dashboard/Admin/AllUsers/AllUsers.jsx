import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    
    return (
        <div>
            <h2>Total Users: </h2>
        </div>
    );
};

export default AllUsers;