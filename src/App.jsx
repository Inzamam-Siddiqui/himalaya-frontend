import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import CaseStudies from "./pages/CaseStudies";
import Footer from "./components/Footer"
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import ProductCard from './components/ProductCard';

const App = () => {
    return (
        <Router>
        <ScrollToTop />
          <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products/>} />
                <Route path="/products/:id" element={<ProductCard/>} />
                <Route path="/about" element={<About />} />
                <Route path="/casestudies" element={<CaseStudies />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
