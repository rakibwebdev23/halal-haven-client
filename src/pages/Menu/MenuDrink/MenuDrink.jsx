import MenuCover from "../../../component/MenuCover/MenuCover";
import MenuData from "../../../component/MenuData/MenuData";
import MenuOrder from "../../../component/MenuOrder/MenuOrder";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import Menu from "../Menu/Menu";
import imgBack from "../../../assets/category/drinkUp.jpg";
import upImg from "../../../assets/images/drinkCover.png";

const MenuDrink = () => {
    const [, , , , , , , , drinkItem] = MenuData();
    return (
        <div>
            <MenuCover
                imgBack={imgBack}
                imgUp={upImg}
                description="Quench your thirst with our refreshing drink selection, including freshly squeezed juices and artisanal mocktails. Perfectly paired with any meal, our beverages enhance your dining experience. Enjoy a delightful sip to complement your culinary adventure."
                order="Get Drink"
                title="Good Drinks"
            ></MenuCover>
            <div className="mt-20 mb-20">
                <SectionTitle
                    subTitle="Drink Menu"
                    title="Flavors of Halal Haven"
                ></SectionTitle>
            </div>
            <Menu items={drinkItem}></Menu>
            <MenuOrder
                menuImg={imgBack}
            ></MenuOrder>
        </div>
    );
};

export default MenuDrink;