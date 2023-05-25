import "./index.css";
import Menu from "./componants/Menu";
import Hero from "./componants/Hero";
import Welcome from "./componants/Welcome";
import About from "./componants/About";
import FoodSelection from "./componants/FoodSelection";
import Gallery from "./componants/Gallery";
import TestimonialPage from "./componants/TestimonialPage";
import Form from "./componants/Form";
import Footer from "./componants/Footer";

function App() {
  return (
    <div>
      <Menu />
      <Hero />
      <Welcome />
      <About />
      <FoodSelection />
      <Gallery />
      <TestimonialPage />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
