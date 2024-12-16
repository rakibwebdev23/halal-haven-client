import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../assets/images/bannerBack.jpg";
import SocialSign from "../../../component/SocialSign/SocialSign";
import HelmetShare from "../../../component/HelmetShare/HelmetShare";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const SignIn = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { signInUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                reset();
                Swal.fire({
                    title: `${user.email} Sign In successfully`,
                    showClass: {
                        popup: `animate__animated animate__fadeInUp animate__faster`
                    },
                    hideClass: {
                        popup: `animate__animated animate__fadeOutDown animate__faster`
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <HelmetShare caption="SignIn" />
            <div className="hero w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: `url("${img}")` }}>
                <div className="hero-overlay bg-black bg-opacity-60 w-full min-h-screen flex items-center justify-center px-4">
                    <div className="card bg-black bg-opacity-70 p-8 sm:p-12 lg:w-full xl:w-1/2 max-w-screen-xl w-full rounded-xl shadow-xl">
                        <h2 className="text-orange-500 text-3xl sm:text-4xl font-bold text-center mb-6">Sign In</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full p-4 text-black rounded-lg"
                                    {...register("email", { required: "Email is required" })}
                                />
                                {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full p-4 text-black rounded-lg"
                                    {...register("password", { required: "Password is required" })}
                                />
                                {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
                            </div>

                            <div className="form-control mt-6">
                                <input
                                    className="relative w-full py-3 text-white border-2 border-transparent bg-orange-600 transition-all duration-300 hover:border-orange-600 hover:bg-transparent hover:text-orange-600 rounded-lg"
                                    type="submit"
                                    value="Sign In"
                                />
                            </div>

                            <SocialSign />

                            <p className="text-white mt-2 text-center">
                                Don't have an account?{" "}
                                <Link className="text-blue-600 font-bold hover:underline" to="/signup">
                                    Sign Up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;