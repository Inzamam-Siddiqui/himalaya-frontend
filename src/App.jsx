import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Footer from "./components/Footer"
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import ProductCard from './components/ProductCard';
import Sustainability from './pages/Sustainability';
import PageTitleUpdater from './components/PageTitleUpdater';

const App = () => {
    return (
        <Router>
          <Navbar/>
          <PageTitleUpdater/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products/>} />
                <Route path="/products/:slug" element={<ProductCard />} />
                <Route path="/about" element={<About />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <ScrollToTop/>
            <Footer/>
        </Router>
        
    );
};

export default App;
