import { FaGoogle } from "react-icons/fa";

const SocialSign = () => {
    const handleGoogleSignUser = () => {
        console.log("google sign");  
    }
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