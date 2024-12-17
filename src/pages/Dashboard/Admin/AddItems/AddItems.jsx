import { useForm } from "react-hook-form";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import HelmetShare from "../../../../component/HelmetShare/HelmetShare";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                recipe: data.recipe,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            };
            const menuRes = await axiosSecure.post("/menu", menuItem);

            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} has been added successfully!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-10">
            <HelmetShare caption="Add Items" />
            <SectionTitle title="Add a New Menu Item" subTitle="Introduce something delicious!" />
            
            <div className="max-w-4xl mx-auto">
                <div className="card bg-white shadow-lg rounded-lg p-6 md:p-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Recipe Name*</label>
                            <input
                                type="text"
                                placeholder="Enter Recipe Name"
                                className="input input-bordered w-full"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">Recipe name is required</p>}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Category*</label>
                                <select
                                    defaultValue="default"
                                    className="select select-bordered w-full"
                                    {...register("category", { required: true })}
                                >
                                    <option disabled value="default">Select Category</option>
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
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Price*</label>
                                <input
                                    type="number"
                                    placeholder="Enter Price"
                                    className="input input-bordered w-full"
                                    {...register("price", { required: true })}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Recipe Details*</label>
                            <textarea
                                placeholder="Write Recipe Details..."
                                className="textarea textarea-bordered w-full h-24"
                                {...register("recipe", { required: true })}
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Image*</label>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full"
                                {...register("image", { required: true })}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                            >
                                Add Item <FaUtensils />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItems;