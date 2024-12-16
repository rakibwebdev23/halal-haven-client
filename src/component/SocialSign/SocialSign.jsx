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
                };
                
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data) {
                            navigate('/');
                        }
                    });
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="mt-6 text-center">
            <button 
                onClick={handleGoogleSignUser} 
                className="flex items-center justify-center bg-white text-gray-800 hover:bg-orange-600 hover:text-white border-2 border-orange-600 w-full py-3 rounded-lg transition-all duration-300"
            >
                <FaGoogle className="text-xl mr-3 text-blue-600" />
                <span className="font-semibold">Sign with Google</span>
            </button>
        </div>
    );
};

export default SocialSign;