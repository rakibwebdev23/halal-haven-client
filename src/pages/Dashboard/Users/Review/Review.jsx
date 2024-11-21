import Swal from "sweetalert2";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Review = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [rating, setRating] = useState(0);

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        // console.log(res.data);
        if (res.data.success) {
            const reviewItem = {
                name: data.name,
                details: data.details,
                rating,
                image: res.data.data.display_url
            }

            const reviewRes = await axiosSecure.post("/review", reviewItem);

            // console.log(reviewRes.data);
            if (reviewRes.data.insertedId) {
                // console.log(reviewRes.data);
                reset();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${data.name} Thank's for your Feedback`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }

    return (
        <div>
            <SectionTitle title="please give me your Feedback" subTitle="please add your comment"></SectionTitle>
            <div className="card w-full shrink-0 shadow-2xl mt-10">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-4 bg-slate-200">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Your name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" {...register("name", { required: true })} />
                        {errors.name?.type === "required" && (
                            <p className="text-red-600">Your Name is Required</p>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold">Your Feedback</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Recipe Details" {...register("details", { required: true })}></textarea>
                    </div>
                    <div className="mb-2">
                        <label className="label">
                            <span className="label-text font-bold">Rating</span>
                        </label>
                        <Rating
                            className="bg-white p-2"
                            style={{ maxWidth: 180 }}
                            value={rating}
                            onChange={setRating}
                        />
                        {rating === 0 && <p className="text-red-600">Rating is Required</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Your Image</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", { required: true })} />
                    </div>
                    <div>
                        <button className="relative px-8 py-3 border-2 border-transparent bg-gray-700 transition-all duration-300 hover:border-gray-600 text-white hover:bg-transparent hover:text-gray-700 font-bold
                         flex justify-center items-center gap-2 rounded-l-lg">
                            Add Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;