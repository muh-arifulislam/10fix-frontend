import { Link, useLocation } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";

// images
import sectionBg from "../../assets/images/page-bg-thumbnail.jpg";

const SectionHeader = ({ title }: { title: string }) => {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter((item) => item !== "");
  paths.pop();
  return (
    <div
      className="relative z-0 lg:py-[140px] md:py-[140px] py-[80px] overlay-primary "
      style={{
        background: `url(${sectionBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="z-10">
        <h2 className="text-center lg:md:text-5xl text-xl font-semibold text-white mb-6">
          {title}
        </h2>
        <div
          className={`px-5 flex lg:md:flex-row flex-col items-center gap-1 justify-center ${
            paths.length > 1 ? "flex-col" : "flex-row"
          }`}
        >
          <span className="flex items-center gap-1">
            <span>
              <Link
                className="text-lg font-medium text-white transition hover:text-amber-400"
                to="/"
              >
                হোম
              </Link>
            </span>
            <span className="text-lg text-white mt-1">
              <BiChevronsRight />
            </span>
            {paths.map((path, idx) => (
              <span key={idx} className="inline-flex items-center gap-1">
                <span>
                  <a
                    className="text-lg font-medium text-white transition hover:text-amber-400"
                    href={"/services"}
                  >
                    {path}
                  </a>
                </span>
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
