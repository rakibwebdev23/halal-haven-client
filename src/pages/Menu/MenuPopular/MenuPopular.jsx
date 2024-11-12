import MenuCover from "../../../component/MenuCover/MenuCover";
import MenuData from "../../../component/MenuData/MenuData";
import imgBack from "../../../assets/images/chiken-fry.jpg";
import imgUp from "../../../assets/images/pizzamain.png";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import Menu from "../Menu/Menu";
import MenuOrder from "../../../component/MenuOrder/MenuOrder";

const MenuPopular = () => {
    const [, , popularItem] = MenuData();
    return (
        <div>
            <MenuCover
                imgBack={imgBack}
                imgUp={imgUp}
                title="Popular Food"
                order="Get Popular Food"
                description="At Halal Haven, indulge in a delightful array of popular dishes that promise to tantalize your taste buds. Savor our handcrafted pizzas, topped with fresh ingredients and bubbling mozzarella, alongside juicy flame-grilled burgers bursting with flavor."
            ></MenuCover>
            <div className="mt-20 mb-20">
                <SectionTitle
                    subTitle="Popular Menu"
                    title="Flavors of Halal Haven"
                ></SectionTitle>
            </div>
            <Menu items={popularItem}></Menu>
            <MenuOrder
                menuImg={imgBack}
            ></MenuOrder>
        </div>
    );
};

export default MenuPopular;