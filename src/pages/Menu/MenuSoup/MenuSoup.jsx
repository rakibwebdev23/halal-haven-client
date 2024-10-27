import MenuCover from "../../../component/MenuCover/MenuCover";
import MenuData from "../../../component/MenuData/MenuData";
import MenuOrder from "../../../component/MenuOrder/MenuOrder";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import Menu from "../Menu/Menu";
import imgBack from "../../../assets/cover/soupCover.jpg";
import upImg from "../../../assets/images/soupUp.png";

const MenuSoup = () => {
    const [, , , , , , soupItem] = MenuData();
    return (
        <div>
            <MenuCover
                imgBack={imgBack}
                imgUp={upImg}
                description="Warm up with our hearty soups made from fresh, wholesome ingredients. Try our signature Chicken Soup, infused with herbs and spices, or the rich Tomato Basil Bisque. Each bowl offers comfort and flavor, making it a great addition to any meal."
                order="Get Soup Menu"
                title="Silk Road Soup"
            ></MenuCover>
            <div className="mt-20 mb-20">
                <SectionTitle
                    subTitle="Soup Menu"
                    title="Flavors of Halal Haven"
                ></SectionTitle>
            </div>
            <Menu items={soupItem}></Menu>
            <MenuOrder
                menuImg={imgBack}
            ></MenuOrder>
        </div>
    );
};

export default MenuSoup;