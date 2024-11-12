import useAuth from "../../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1 className="text-3xl font-semibold">Hi, Welcome to <span className="text-orange-500">{ user.displayName}</span></h1>
        </div>
    );
};

export default UserHome;