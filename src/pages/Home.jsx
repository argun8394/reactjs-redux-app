import Products from "../components/products/Products";
import Slider from "../components/slider/Slider";

const Home = () => {
  return (
    <div className="bg-white">
      <Slider />
      <Products />
    </div>
  );
};

export default Home;
