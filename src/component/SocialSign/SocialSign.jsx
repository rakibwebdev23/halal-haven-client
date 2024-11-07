import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialSign = () => {
    const { googleSignUser } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleSignUser = () => {
        googleSignUser()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                                
                axiosPublic.post('/users', userInfo)
                    .then(res => {                        
                        if (res.data) {
                        navigate('/')
                    }
                })
            })
            .catch(error => console.log(error)
            )
    };

    return (
        <div>
            <div className="text-center mt-2 w-full">
                <button onClick={handleGoogleSignUser} className="btn  text-white btn-outline border hover:bg-orange-600 border-orange-600 w-full">
                    <FaGoogle className="text-blue-600 text-xl"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialSign;