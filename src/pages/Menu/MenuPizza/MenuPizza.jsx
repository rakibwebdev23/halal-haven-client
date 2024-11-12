import MenuCover from "../../../component/MenuCover/MenuCover";
import MenuData from "../../../component/MenuData/MenuData";
import MenuOrder from "../../../component/MenuOrder/MenuOrder";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import Menu from "../Menu/Menu";
import imgBack from "../../../assets/cover/pizz.jpg";
import upImg from "../../../assets/images/pizza.png";

const MenuPizza = () => {
    const [, , , pizzaItem] = MenuData();
    return (
        <div>
            <MenuCover
                imgBack={imgBack}
                imgUp={upImg}
                description="Indulge in our handcrafted pizzas, featuring a crispy crust topped with zesty tomato sauce, rich mozzarella, and fresh ingredients. Choose from classics like Pepperoni and Margherita, or try unique options like BBQ Chicken. Each pizza is baked to perfection in our stone oven for a delightful taste experience."
                order="Get Pizza"
                title="Delicious Pizza"
            ></MenuCover>
            <div className="mt-20 mb-20">
                <SectionTitle
                    subTitle="Pizza Menu"
                    title="Flavors of Halal Haven"
                ></SectionTitle>
            </div>
            <Menu items={pizzaItem}></Menu>
            <MenuOrder
                menuImg={imgBack}
            ></MenuOrder>
        </div>
    );
};

export default MenuPizza;