import { NavLink } from "react-router-dom";

type PropsType = {
  data: {
    id: number;
    name: string;
    title: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon?: any;
  };
};

const CardServiceNav = ({ data }: PropsType) => {
  return (
    <NavLink to={`/category/${data.name}`}>
      <div className="flex items-center gap-3 px-[10px] py-2 rounded border border-transparent transition-all ease-linear hover:border-slate-200 hover:translate-x-[5px]">
        <div className="w-[45px] h-[45px] border rounded flex items-center justify-center text-secondary">
          {data.icon}
        </div>
        <div className="">
          <p className="text-[14px]">{data.title}</p>
          <p className="text-[12px]">{data.description}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default CardServiceNav;
