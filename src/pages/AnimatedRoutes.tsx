import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import WithNav from "../components/WithNav/WithNav";
import WithoutNav from "../components/WithoutNav/WithoutNav";
import { HomePage } from "./HomePage/HomePage";
import { AboutPage } from "./AboutPage/AboutPage";
import { ContactPage } from "./ContactPage/ContactPage";
import { GalleryPage } from "./GalleryPage/GalleryPage";
import { OrdersPage } from "./OrdersPage/OrdersPage";
import { SignInPage } from "./SignInPage/SignInPage";
import { AdminPage } from "./AdminPage/AdminPage";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "../components/context/AuthProvider";
import { PaintingDetailsPage } from "./PaintingDetailsPage/PaintingDetailsPage";

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <AuthProvider>
        <Routes location={location} key={location.pathname}>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/painting/:id" element={<PaintingDetailsPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </AnimatePresence>
  );
}
