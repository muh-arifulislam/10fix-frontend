import { NavLink } from "react-router-dom";
import { TBlog } from "../../types/global.type";

type PropsType = {
  data: TBlog;
};

const CardBlog = ({ data }: PropsType) => {
  function truncateTitle(title: string, maxLength: number) {
    if (title) {
      if (title.length <= maxLength) return title;

      const truncated = title.substring(0, maxLength);
      return truncated.substring(0, truncated.lastIndexOf(" ")) + "...";
    }
    return "";
  }

  const truncatedTitle = truncateTitle(data.title, 60);

  return (
    <div className="z-50 w-full group ">
      <div className="rounded-[6px] text-left">
        <div>
          <img
            className="w-full h-full min-h-[230px] max-h-[230px] img-fluid  rounded-t-md"
            src={data?.image}
            alt="Blog Image"
          />
        </div>
        <div className="border border-t-0 w-full px-[30px] py-[25px] rounded-md transition ease-in duration-300 group-hover:shadow-xl">
          <div className="min-h-[72px]">
            <NavLink
              to={`/blogs/${data._id}`}
              className={"text-xl text-[#000000] font-semibold"}
            >
              {truncatedTitle}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
