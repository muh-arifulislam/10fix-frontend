type PropsType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  IconComponent: any;
  title: string;
};

const CardWorkingProcess = ({ IconComponent, title }: PropsType) => {
  return (
    <div className="flex flex-col items-center text-center relative w-full">
      <div
        className={` min-w-[70px] w-[70%]  sm:w-[150px] h-[80px] sm:h-[150px]  rounded-md flex items-center justify-center text-white shadow-md mb-8  transition ease-linear duration-300 relative bg-primary`}
      >
        <div>
          <IconComponent className={`text-3xl sm:text-[46px]`} />
        </div>
      </div>
      <h2 className=" text-primary text-sm sm:text-2xl leading-[1.3] font-semibold mb-5 text-center">
        {title}
      </h2>
    </div>
  );
};

export default CardWorkingProcess;
