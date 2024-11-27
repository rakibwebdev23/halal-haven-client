import HelmetShare from "../../../component/HelmetShare/HelmetShare";
import MenuCart from "../../../component/MenuCart/MenuCart";

const Menu = ({ items }) => {
    return (

        <div>
            <HelmetShare caption="Menu"></HelmetShare>
            <div className="grid gap-10 lg:grid-cols-2 mx-auto px-4 lg:px-8">
                {
                    items.map(item => <MenuCart
                        key={item._id}
                        item={item}
                    ></MenuCart>)
                }
            </div>
        </div>
    );
};

export default Menu;