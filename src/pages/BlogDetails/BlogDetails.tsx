import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TBlog } from "../../types/global.type";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<null | TBlog>(null);
  useEffect(() => {
    fetch(`https://10fix.vercel.app/api/v1/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBlog(data.data);
        }
      });
  }, []);
  return (
    <>
      <div className="custom-container">
        <div className="my-[80px] sm:my-[120px]">
          <h4 className="text-center text-2xl sm:text-4xl mb-5 sm:mb-8">
            {blog?.title}
          </h4>
          <div className="flex justify-center  items-center gap-3 mb-8 text-primary">
            <small className="transition ease ">{blog?.category}</small>
          </div>
          <div className="max-w-[900px] mx-auto">
            <img className="w-full" src={blog?.image} alt="" />
          </div>
          <div className="mt-12 w-full sm:w-[70%] mx-auto leading-8">
            <article>{blog?.description}</article>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
