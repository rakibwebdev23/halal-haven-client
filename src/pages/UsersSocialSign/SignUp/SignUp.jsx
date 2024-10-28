import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialSign from "../../../component/SocialSign/SocialSign";
import img from "../../../assets/images/bannerBack.jpg";
import HelmetShare from "../../../component/HelmetShare/HelmetShare";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser, logOut, updateUserProfile } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: loggedUser.displayName,
                            email: loggedUser.email
                        }
                        console.log(userInfo);
                        reset();
                        Swal.fire({
                            title: `${loggedUser.email} Sign Up Successfully`,
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

                        logOut()
                            .then(() => {
                                navigate(from, { replace: true });
                            })
                            .catch(error => console.log(error)
                            )
                    })
                    .catch(error => console.log(error)
                    )
            })
            .catch(error => console.log(error)
            )
    };

    return (
        <div>
            <HelmetShare caption="SignUp"></HelmetShare>
            <div className="hero w-full min-h-screen" style={{ backgroundImage: `url("${img}")` }}>
                <div className="hero-content min-h-screen bg-black bg-opacity-60 w-full">
                    <div className="card w-1/2 bg-black bg-opacity-50 p-10 mt-10">
                        <h2 className="text-orange-500 text-4xl font-bold text-center">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" className="input input-bordered"
                                    {...register("name", { required: true })} />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Photo</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered"
                                    {...register("photoURL", { required: true })} />
                                {errors.photoURL && <span className="text-red-600">PhotoURL is required</span>}
                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} />

                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less than 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one Uppercase, one Lowercase and one Special characters.</span>}

                            </div>
                            <div className="form-control mt-6">
                                <input className="relative w-full rounded-xl py-3 text-white border-2 border-transparent bg-orange-600 transition-all duration-300 hover:border-orange-600 hover:bg-transparent hover:text-orange-600" type="submit" value="SignUp" />
                            </div>
                            <SocialSign></SocialSign>
                            <p className="text-white mt-2">Do You have an account ! Please <Link className="text-blue-600 font-bold hover:underline hover:underline-offset-2" to="/signin">Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;