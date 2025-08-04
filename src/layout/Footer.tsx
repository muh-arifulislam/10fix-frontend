import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import footerBg from "../assets/images/footer.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto">
      <div
        className="h-[400px] w-full bg-fit bg-left-bottom sm:bg-left-bottom relative bg-cover"
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      >
        <div className="absolute bottom-4 px-6 w-full flex lg:md:flex-row flex-col items-start sm:items-end justify-between">
          <div className="hidden md:block">
            <ul className="flex gap-3 text-white">
              <li>
                <NavLink className="hover:underline" to={"/about-us"}>
                  আমাদের সম্পর্কে
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:underline" to={"/contact-us"}>
                  যোগাযোগ
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:underline" to={"/#services"}>
                  সেবাসমূহ
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:underline" to={"/blogs"}>
                  ব্লগ
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:underline" to={"/privacy-policy"}>
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <a
              href="https://www.facebook.com/muh.arifulislam/"
              target="_blank"
              className="inline-block bg-blue-600 p-[10px] rounded-sm"
            >
              <FaFacebook color="white" size={17} />
            </a>

            <a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/8801306560747"
              className="inline-block bg-green-600 p-[10px] rounded-sm"
            >
              <FaWhatsapp color="white" size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/muh-arifulislam/"
              target="_blank"
              className="inline-block bg-blue-500 p-[10px] rounded-sm"
            >
              <FaLinkedin color="white" size={17} />
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm p-4 text-center text-[#000000]">
        © {new Date().getFullYear()}
        <span className="font-bold"> 10fix</span>. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
