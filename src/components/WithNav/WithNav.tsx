import { Outlet } from "react-router";
import Footer from "../Footer";
import Navbar from "../Navbar";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
