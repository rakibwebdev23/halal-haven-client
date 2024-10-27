import MenuCover from "../../../component/MenuCover/MenuCover";
import MenuData from "../../../component/MenuData/MenuData";
import upImg from "../../../assets/images/gril.png";
import imgBack from "../../../assets/cover/cover1.jpg";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import Menu from "../Menu/Menu";
import MenuOrder from "../../../component/MenuOrder/MenuOrder";

const MenuOffered = () => {
    const [, offeredItem] = MenuData();
    return (
        <div>
            <MenuCover
                imgBack={imgBack}
                imgUp={upImg}
                description="Savor the taste of tender, perfectly marinated halal meats grilled over an open flame to lock in flavors. Enjoy a selection of skewers, steaks, and mixed platters, served with our signature sauces and sides."
                order="Get Offered Menu"
                title="Offered Food"
            ></MenuCover>
            <div className="mt-20 mb-20">
                <SectionTitle
                    subTitle="Offered Menu"
                    title="Flavors of Halal Haven"
                ></SectionTitle>
            </div>
            <Menu items={offeredItem}></Menu>
            <MenuOrder
            menuImg={imgBack}
            ></MenuOrder>
        </div>
    );
};

export default MenuOffered;