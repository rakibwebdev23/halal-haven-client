import MenuCover from "../../../component/MenuCover/MenuCover";
import MenuData from "../../../component/MenuData/MenuData";
import MenuOrder from "../../../component/MenuOrder/MenuOrder";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import Menu from "../Menu/Menu";
import imgBack from "../../../assets/category/salad.jpg";
import upImg from "../../../assets/images/salad.png";

const MenuSalad = () => {
    const [, , , , , , , saladItem] = MenuData();
    return (
        <div>
            <MenuCover
                imgBack={imgBack}
                imgUp={upImg}
                description="Fresh and vibrant, our salads feature a mix of crisp greens and seasonal vegetables topped with your choice of protein. Drizzled with house-made dressings, each salad offers a light and refreshing option. Whether it's a Greek Salad or a hearty Chicken Caesar, you'll find a perfect balance of flavors."
                order="Get Salad"
                title="Garden Oasis Salad"
            ></MenuCover>
            <div className="mt-20 mb-20">
                <SectionTitle
                    subTitle="Salad Menu"
                    title="Flavors of Halal Haven"
                ></SectionTitle>
            </div>
            <Menu items={saladItem}></Menu>
            <MenuOrder
                menuImg={imgBack}
            ></MenuOrder>
        </div>
    );
};

export default MenuSalad;