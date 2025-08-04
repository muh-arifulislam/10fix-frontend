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
      className="w-full max-w-screen-2xl mx-auto relative z-0 lg:py-[140px] md:py-[140px] py-[80px] section-header-bg"
      style={{
        background: `url(${sectionBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-red-400/10 z-0 pointer-events-none" />
      <div className="z-10 relative">
        <h2 className="text-center lg:md:text-5xl text-xl font-semibold text-slate-900 mb-6">
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
                className="text-lg font-medium text-slate-700 transition hover:text-amber-400"
                to="/"
              >
                হোম
              </Link>
            </span>
            <span className="text-lg text-slate-600 mt-1">
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
