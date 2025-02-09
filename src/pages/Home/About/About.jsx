import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiChefHatBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Container from "../../../component/Container/Container";

const About = () => {
  return (
    <Container>
      <div className="py-20 mb-4 ">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="relative">
            <div className="rounded-full overflow-hidden shadow-lg">
              <img 
                src="https://i.ibb.co/tQkPHKJ/about-Food.jpg" 
                alt="Halal Haven Food"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-100 rounded-lg -z-10"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <span className="inline-block text-orange-600 font-semibold text-sm tracking-widest uppercase">
                About Halal Haven
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-2">
                High-quality food for a healthier life
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg text-center lg:text-left">
              "Halal Haven" is a cozy and welcoming restaurant that caters to those who value 
              high-quality, halal-certified cuisine. Our menu is a fusion of flavors from around 
              the world, offering a diverse range of dishes that meet the highest standards of 
              halal preparation.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link to="/menuPopular">
                <button className="group flex items-center gap-3 px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <span>Explore Popular Menu</span>
                  <MdKeyboardDoubleArrowRight className="text-2xl group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8 pt-6 pr-0 lg:pr-4">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl  flex flex-col items-start gap-6 transform hover:scale-105 transition-transform duration-300">
                <div className="p-4 bg-orange-100 rounded-xl">
                  <IoFastFoodOutline className="text-4xl text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Best Quality Food
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Enjoy premium halal meals made with the freshest ingredients.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl  flex flex-col items-start gap-6 transform hover:scale-105 transition-transform duration-300">
                <div className="p-4 bg-orange-100 rounded-xl">
                  <PiChefHatBold className="text-4xl text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Expert Chefs
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Our chefs bring authentic flavors and culinary expertise to every dish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
