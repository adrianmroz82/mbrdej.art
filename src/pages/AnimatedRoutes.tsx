import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import WithNav from "../components/WithNav/WithNav";
import WithoutNav from "../components/WithoutNav/WithoutNav";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import GalleryPage from "./GalleryPage";
import HomePage from "./HomePage";
import OrdersPage from "./OrdersPage";



export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route element={<WithoutNav />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
