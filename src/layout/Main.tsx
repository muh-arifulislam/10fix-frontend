import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default Main;
