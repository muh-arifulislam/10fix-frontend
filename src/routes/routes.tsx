import { ScrollRestoration, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorBoundary from "./ErrorBoundary";
import Home from "../pages/Home";
import ServiceRequest from "../pages/ServiceRequest/ServiceRequest";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs";
import OurServices from "../pages/OurServices/OurServices";
import Blogs from "../pages/Blogs/Blogs";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import PrivacyAndPolicy from "../pages/PrivacyAndPolicy";
import TermsAndCondition from "../pages/TermsAndCondition";
import HeroService from "../pages/HeroService";
import OrderSuccess from "../pages/OrderSuccess";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/request-service",
        element: <ServiceRequest />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/service",
        element: <OurServices />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyAndPolicy />,
      },
      {
        path: "/terms-and-condition",
        element: <TermsAndCondition />,
      },
      {
        path: "/category/:name",
        element: <HeroService />,
      },
    ],
  },
  {
    path: "/:orderId/account/orders/:_id",
    element: (
      <>
        <ScrollRestoration />
        <OrderSuccess />
      </>
    ),
  },
]);

export default routes;
