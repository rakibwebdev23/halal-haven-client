import Container from "../../../component/Container/Container";
import HelmetShare from "../../../component/HelmetShare/HelmetShare";
import MenuCart from "../../../component/MenuCart/MenuCart";

const Menu = ({ items }) => {
    return (
        <Container>
            <HelmetShare caption="Menu"></HelmetShare>
            <div className="grid gap-10 lg:grid-cols-2 mx-auto">
                {
                    items.map(item => <MenuCart
                        key={item._id}
                        item={item}
                    ></MenuCart>)
                }
            </div>
        </Container>
    );
};

export default Menu;