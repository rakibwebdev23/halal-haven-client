import MenuCover from "../../../component/MenuCover/MenuCover";
import MenuOrder from "../../../component/MenuOrder/MenuOrder";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import Menu from "../Menu/Menu";
import imgBack from "../../../assets/images/pexels-dana-tentis-118658-750073.jpg";
import upImg from "../../../assets/cover/burgerCover.png";
import MenuData from "../../../component/MenuData/MenuData";

const MenuBurger = () => {
    const [, , , , burgerItem] = MenuData();
    return (
        <div>
            <MenuCover
                imgBack={imgBack}
                imgUp={upImg}
                description="Savor our juicy flame-grilled burgers made from premium halal beef, served on a toasted brioche bun. Customize your burger with fresh toppings, including crisp lettuce, ripe tomatoes, and our signature sauces. Each bite is a mouthwatering blend of flavors that will satisfy your cravings."
                order="Get Burger Menu"
                title="The Halal Heatwave"
            ></MenuCover>
            <div className="mt-20 mb-20">
                <SectionTitle
                    subTitle="Burger Menu"
                    title="Flavors of Halal Haven"
                ></SectionTitle>
            </div>
            <Menu items={burgerItem}></Menu>

            <MenuOrder
                menuImg={imgBack}
            ></MenuOrder>
        </div>
    );
};

export default MenuBurger;