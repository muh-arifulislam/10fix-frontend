import { useEffect, useState } from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import { TBlog, TServerResponse } from "../../types/global.type";
import CardBlog from "../../components/Card/CardBlog";
import { RiErrorWarningFill } from "react-icons/ri";
import BlogLoader from "../../components/loader/BlogLoader";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState<null | TBlog[] | undefined>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const [current, setCurrent] = useState(1);
  const [pageCount, setPageCount] = useState<number | null | undefined>(null);
  useEffect(() => {
    setLoading(true);
    const fetchData = () => {
      fetch(`https://10fix.vercel.app/api/v1/blogs?page=${current}&limit=${18}`)
        .then((res) => res.json())
        .then((data: TServerResponse<TBlog[]>) => {
          if (data.success) {
            setBlogs(data.data);

            setError(null);

            if (data.meta) {
              const page = Math.ceil(data.meta?.total / data.meta?.limit);
              setPageCount(page);
            }
          } else {
            setError("something went wrong!!");
          }
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    };
    fetchData();
  }, [current]);

  let content;

  if (loading) {
    content = (
      <>
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
      </>
    );
  }

  if (error) {
    content = (
      <>
        <div className=" col-span-3 flex items-center justify-center">
          <div className="bg-slate-100 min-h-[420px] w-full sm:w-[60%] p-[20px] flex justify-center items-center rounded">
            <div className="flex flex-col justify-center items-center">
              <span className="inline-block mb-3">
                <RiErrorWarningFill size={48} />
              </span>
              <p className="text-2xl font-semibold mb-3 text-center">
                Oops! something went wrong
              </p>
              <div>
                <button
                  onClick={() => {
                    navigate(0);
                  }}
                  className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-500 transition-all ease-linear"
                >
                  Reload Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (blogs?.length) {
    content = (
      <>
        {blogs?.map((blog) => (
          <CardBlog key={blog._id} data={blog} />
        ))}
      </>
    );
  }

  return (
    <>
      <SectionHeader title="সকল ব্লগ" />
      <section className="">
        <div className="max-w-[1200px] mx-auto my-20 px-4 sm:px-0">
          <h2 className="section-title text-center">সকল ব্লগ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 simple-content-module">
            {content}
          </div>
          <div className="flex justify-center sm:justify-end mt-8">
            <button
              disabled={current === 1}
              onClick={() => {
                setCurrent(current - 1);
              }}
              className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Previous
            </button>
            <button
              disabled={current === pageCount}
              onClick={() => {
                setCurrent(current + 1);
              }}
              className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
