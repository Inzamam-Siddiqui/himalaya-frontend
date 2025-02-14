import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = {
      "/": "Himalaya Plast | Home",
      "/about": "Himalaya Plast | About Us",
      "/contact": "Himalaya Plast | Contact",
      "/sustainability": "Himalaya Plast | Sustainability",
      "/products": "Himalaya Plast | Products",
    };

    document.title = pageTitle[location.pathname] || "Himalaya Plast";
  }, [location]);

  return null;
};

export default PageTitleUpdater;
