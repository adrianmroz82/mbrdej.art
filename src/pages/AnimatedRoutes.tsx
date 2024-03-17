import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import WithNav from "../components/WithNav/WithNav";
import WithoutNav from "../components/WithoutNav/WithoutNav";
import { HomePage } from "./HomePage/HomePage";
import { AboutPage } from "./AboutPage/AboutPage";
import { ContactPage } from "./ContactPage/ContactPage";
import { GalleryPage } from "./GalleryPage/GalleryPage";
import { OrdersPage } from "./OrdersPage/OrdersPage";

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
