import "./index.css";
import { Home, Services, Works, CTA, Footer } from "../src/pages/index";
import { Quote } from "./components";

function App() {
  return (
    <div>
      <Home />

      <Quote />
      <Services />
      <Works />
      <CTA />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
