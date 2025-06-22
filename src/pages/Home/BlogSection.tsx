import { FaArrowRight } from "react-icons/fa";
import Slider from "../../lib/swiper/Slider";
import CardBlog from "../../components/Card/CardBlog";
import useBreakpoint from "../../hooks/useBreakpoint";
import { useEffect, useState } from "react";
import { TBlog } from "../../types/global.type";
import { useNavigate } from "react-router-dom";
import BlogSkeleton from "../../components/Skeleton/BlogSkeleton";

const BlogSection = () => {
  const breakPoint = useBreakpoint();

  const navigate = useNavigate();

  const [blogs, setBlogs] = useState<null | TBlog[]>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setLoading(true);
    fetch("https://10fix.vercel.app/api/v1/blogs?limit=6")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBlogs(data.data);
          setLoading(false);
        } else {
          setError("something went wrong!!. Reload the page.");
          setLoading(false);
        }
      })
      .catch(() => {
        setError("something went wrong!!. Reload the page.");
        setLoading(false);
      });
  }, []);

  let content;
  content = (
    <Slider
      data={blogs}
      render={CardBlog}
      spaceBetween={20}
      slidePerView={breakPoint === "xs" ? 1 : 3}
      autoPlay={false}
    />
  );
  if (error) {
    content = (
      <>
        <div className="custom-container my-10">
          <div>
            <div className="text-center">
              <h5 className="text-3xl">Oops!</h5>
              <h5 className="text-xl">
                Something went wrong! Please refresh the page and try again
              </h5>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <section className="">
      <div className="custom-container">
        <div className="">
          <div className="flex justify-center sm:justify-between items-center">
            <h2 className="text-[34px] section-title alt">ব্লগ সমূহ </h2>
            <button
              onClick={() => {
                navigate("/blogs");
              }}
              className="px-8 py-4 rounded border items-center gap-12 group hidden sm:flex"
            >
              <span className="text-md font-solaiman-bold">ব্লগে যান</span>
              <span className="group-hover:translate-x-2 transition-all ease-linear ">
                <FaArrowRight color="#e83330" />
              </span>
            </button>
          </div>
        </div>
        <div className="mt-12">
          <div className="">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {breakPoint === "xs" ? (
                  <BlogSkeleton />
                ) : (
                  <>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                  </>
                )}
              </div>
            ) : (
              content
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
