import HelmetShare from "../../../component/HelmetUse/HelmetShare";
import Testmonial from "../../Testmonial/Testmonial";
import About from "../About/About";
import Banner from "../Banner/banner";
import Categories from "../Categories/Categories";
import MarqueSlide from "../MarqueSlide/MarqueSlide";
import PopularItem from "../PopularItem/PopularItem";


const Home = () => {
    return (
        <div>
            <HelmetShare
            caption="Home"
            ></HelmetShare>
            <Banner></Banner>
            <MarqueSlide></MarqueSlide>
            <About></About>
            <Categories></Categories>
            <PopularItem></PopularItem>
            <Testmonial></Testmonial>
            
        </div>
    );
};

export default Home;