import MenuCover from "../../../component/MenuCover/MenuCover";
import MenuOrder from "../../../component/MenuOrder/MenuOrder";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import Menu from "../Menu/Menu";
import imgBack from "../../../assets/cover/dessertCover.jpg";
import upImg from "../../../assets/cover/dessertCoverUp.png";
import MenuData from "../../../component/MenuData/MenuData";

const MenuDessert = () => {
    const [, , , , , dessertItem] = MenuData();
    return (
        <div>
            <MenuCover
                imgBack={imgBack}
                imgUp={upImg}
                description="Treat yourself to our delectable desserts, including creamy cheesecakes and rich chocolate lava cakes. For a sweet twist, try our traditional Middle Eastern Baklava, crafted with care. Each dessert is a perfect ending to your meal that will satisfy your sweet cravings."
                order="Get Dessert Menu"
                title="Sweety Dessert"
            ></MenuCover>
            <div className="mt-20 mb-20">
                <SectionTitle
                    subTitle="Dessert Menu"
                    title="Flavors of Halal Haven"
                ></SectionTitle>
            </div>
            <Menu items={dessertItem}></Menu>
            <MenuOrder
                menuImg={imgBack}
            ></MenuOrder>
        </div>
    );
};

export default MenuDessert;