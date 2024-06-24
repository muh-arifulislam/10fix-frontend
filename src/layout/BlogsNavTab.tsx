import { FaChevronDown } from "react-icons/fa";
import FlyoutLink from "../components/ui/FlyoutLink";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { TBlog } from "../types/global.type";
// import { NavLink } from "react-router-dom";

const BlogsNavTab = () => {
  return (
    <div className="flex justify-center bg-white text-slate-950 z-50 relative">
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        <span className="flex items-center gap-2 text-[17px]">
          ব্লগ
          <span>
            <FaChevronDown size={10} />
          </span>
        </span>
      </FlyoutLink>
    </div>
  );
};

const PricingContent = () => {
  const [blogs, setBlogs] = useState<null | TBlog[]>(null);
  useEffect(() => {
    fetch("https://server.10fix.com.bd/api/v1/blogs/latest")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBlogs(data.data);
        }
      });
  }, []);
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          {blogs?.map((blog) => (
            <NavLink to={`/blogs/${blog._id}`}>
              <img
                className="mb-2 h-14 w-full rounded object-cover"
                src={blog?.image}
                alt="Placeholder image"
              />
              <h4 className="mb-0.5 text-sm font-medium">{blog?.title}</h4>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <NavLink to={"/blogs"} className={"flex items-center gap-2"}>
          <span className="text-[15px]">আরো দেখুন</span>
          <FaArrowRightLong size={14} />
        </NavLink>
      </div>
    </div>
  );
};
export default BlogsNavTab;
