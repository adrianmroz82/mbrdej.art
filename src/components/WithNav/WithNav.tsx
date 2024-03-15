import { Outlet } from "react-router";

import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

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
