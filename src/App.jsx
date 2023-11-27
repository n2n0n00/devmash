import "./index.css";
import { Home, Services, Works, CTA, Footer } from "../src/pages/index";
import { Carousel, Quote } from "./components";

function App() {
  return (
    <div>
      <Home />
      <Carousel />
      <Quote />
      <Services />
      <Works />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
