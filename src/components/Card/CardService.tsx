import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TService } from "../../types/index.type";

const CardService = ({ data }: { data: TService }) => {
  const [hover, setHover] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/request-service`)}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="rounded-md text-center select-none border border-tertiary shadow-lg cursor-pointer"
    >
      <div className="relative">
        <div className="relative overflow-hidden">
          <img
            className={`rounded-t-md max-h-[200px] w-full object-cover transition ease-linear ${
              hover ? "scale-[1.1]" : "scale-[1]"
            }`}
            src={data?.image}
            alt=""
          />
          <div
          // className={`absolute top-0 left-0 w-full h-full bg-[#000] ${
          //   hover
          //     ? "opacity-50 transition-all ease-linear duration-300"
          //     : "opacity-0 transition-all ease-linear duration-300"
          // }`}
          ></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex justify-center"></div>
      </div>
      <div className="px-2 sm:px-10 py-3 sm:py-8">
        <h2 className="text-sm sm:text-2xl">
          <Link
            to={`/request-service`}
            className={`transition ease-linear ${
              hover ? "text-secondary" : "text-primary"
            }`}
          >
            {data.name}
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default CardService;
