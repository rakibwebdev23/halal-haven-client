import MenuCart from "../../../component/MenuCart/MenuCart";
import MenuData from "../../../component/MenuData/MenuData";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import BannerPopular from "../BannerPopular/BannerPopular";

const PopularItem = () => {

    const [, , popularItem] = MenuData();

    return (
        <div>
            <BannerPopular></BannerPopular>
            <SectionTitle
                subTitle="Popular Menu"
                title="We provide exclusive food based on BD explore our popular food"
            ></SectionTitle>
            <div className="grid gap-10 lg:grid-cols-2 mx-auto mt-20 lg:px-8 px-4">
                {
                    popularItem.map(item => <MenuCart
                        key={item._id}
                        item={item}
                    ></MenuCart>)
                }
            </div>
        </div>
    );
};

export default PopularItem;