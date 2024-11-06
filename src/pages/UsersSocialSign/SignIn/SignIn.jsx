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
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error)
            )
    };

    return (
        <div>
            <HelmetShare caption="SignIn"></HelmetShare>
            <div className="hero w-full min-h-screen" style={{ backgroundImage: `url("${img}")` }}>
                <div className="hero-content min-h-screen bg-black bg-opacity-60 w-full">
                    <div className="card w-1/2 bg-black bg-opacity-50 p-10 mt-10">
                        <h2 className="text-orange-500 text-4xl font-bold text-center">Sign In</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-600">Email is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" {...register("password", {
                                    required: true,

                                })} />
                                {errors.password && <span className="text-red-600">Password is required</span>}


                            </div>
                            <div className="form-control mt-6">
                                <input className="relative w-full rounded-xl py-3 text-white border-2 border-transparent bg-orange-600 transition-all duration-300 hover:border-orange-600 hover:bg-transparent hover:text-orange-600" type="submit" value="SignIn" />
                            </div>
                            <SocialSign></SocialSign>
                            <p className="text-white mt-2">Don't have an account ! Please <Link className="text-blue-600 font-bold hover:underline hover:underline-offset-2" to="/signup">Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;