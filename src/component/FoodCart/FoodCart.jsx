import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCart = ({ item }) => {

    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddOrder = () => {
        if (user && user?.email) {
            const cartData = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axiosSecure.post("/carts", cartData)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }

                })
        }
        else {
            Swal.fire({
                title: "You are not Sign In",
                text: "Please Sign In & add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please! Sign In"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/signin", { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card card-compact hover:bg-orange-300 bg-base-100 w-full shadow-xl transition-all  duration-500 ease-in-out transform hover:scale-105">
            <figure>
                <img className="h-full w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:opacity-80"
                    src={image}
                    alt="food" />
            </figure>
            <p className="lg:top-32 top-44 bg-black bg-opacity-60 text-white px-2 py-1 absolute"><span className="text-orange-500">$</span> {price}</p>
            <div className="card-body text-justify space-y-2">
                <h2 className="card-title font-bold">{name}</h2>
                <p className="font-poppins text-justify text-black">{recipe}</p>
                <div className="card-actions">
                    <button onClick={handleAddOrder} className="relative w-full lg:w-3/4 py-3 text-white border-2 border-transparent bg-orange-600 transition-all duration-300 hover:border-orange-600 hover:bg-transparent hover:text-orange-700 uppercase rounded-l-xl rounded-t-xl font-bold">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;