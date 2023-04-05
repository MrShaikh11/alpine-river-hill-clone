import "./App.css";
import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Covid19 from "./pages/Covid19";
import Offers from "./pages/Offers";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter> 
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/covid-19" element={<Covid19 />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={< Contact/>} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
