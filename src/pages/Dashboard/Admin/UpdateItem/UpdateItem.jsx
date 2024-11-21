import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { _id, name, category, price, recipe } = useLoaderData(); 
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        // console.log(res.data);
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                recipe: data.recipe,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            // console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is an Updated`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/dashboard/manageItems");
            }
        }
    }

    return (
        <div>
            <SectionTitle title="Update an item" subTitle="Any item update"></SectionTitle>
            <div className="card w-full shrink-0 shadow-2xl mt-10">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-4 bg-slate-200">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Recipe name*</span>
                        </label>
                        <input defaultValue={name} type="text" placeholder="Name" className="input input-bordered" {...register("name", { required: true })} />
                    </div>
                    <div className="flex items-center w-full gap-4">
                        {/* category field */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Category*</span>
                            </label>
                            <select defaultValue={category} className="select select-bordered w-full" {...register("category", { required: true })}>
                                <option disabled value="default">All Category</option>
                                <option value="offered">Offered Food</option>
                                <option value="popular">Popular Food</option>
                                <option value="pizza">Pizza</option>
                                <option value="burger">Burger</option>
                                <option value="dessert">Dessert</option>
                                <option value="soup">Soup</option>
                                <option value="salad">Salad</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* price field */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Price*</span>
                            </label>
                            <input defaultValue={price} type="number" placeholder="Price" className="input input-bordered" {...register("price", { required: true })} />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold">Recipe Details*</span>
                        </div>
                        <textarea defaultValue={recipe} className="textarea textarea-bordered h-24" placeholder="Recipe Details" {...register("recipe", { required: true })}></textarea>
                    </div>
                    <div className="form-control">
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image",{ required: true })} />
                    </div>
                    <div>
                        <button className="relative px-8 py-3 border-2 border-transparent bg-gray-700 transition-all duration-300 hover:border-gray-600 text-white hover:bg-transparent hover:text-gray-700 font-bold
                         flex justify-center items-center gap-2 rounded-l-lg">
                            Update An Item <FaUtensils></FaUtensils>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;