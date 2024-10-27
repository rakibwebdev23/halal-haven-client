import MenuCart from "../../../component/MenuCart/MenuCart";

const Menu = ({ items }) => {
    return (

        <div className="grid gap-10 md:grid-cols-2 mx-auto">
            {
                items.map(item => <MenuCart
                    key={item._id}
                    item={item}
                ></MenuCart>)
            }
        </div>
    );
};

export default Menu;