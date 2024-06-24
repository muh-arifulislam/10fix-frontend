import { NavLink } from "react-router-dom";

const CardBlogLarge = () => {
  return (
    <div className=" flex flex-col group rounded-md">
      <div
        className="w-[100%] h-full min-h-[230px] bg-cover bg-center rounded-t-md"
        style={{
          backgroundImage:
            'url("https://cdn.comparitech.com/wp-content/uploads/2018/02/Slow-laptop_-How-to-make-it-faster.jpg.webp")',
        }}
      ></div>

      <div className="border border-t-0 w-full px-[30px] py-[25px] rounded-md transition ease-in duration-300 group-hover:shadow-xl ">
        <div className="flex items-center gap-3 mb-4 text-primary">
          <small className="transition ease group-hover:text-secondary">
            Travel
          </small>
          <span className="inline-block w-1 h-1 rounded-full bg-primary"></span>
          <small className="">20 June, 2024</small>
        </div>
        <div className="mb-4">
          <NavLink
            to={"/blog/:id"}
            className={"text-xl text-[#000000] font-semibold"}
          >
            কীভাবে ল্যাপটপ এর গতি বৃদ্ধি করবেন...
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CardBlogLarge;
