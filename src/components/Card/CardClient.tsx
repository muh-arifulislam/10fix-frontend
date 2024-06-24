type PropsType = {
  data: {
    image: string;
  };
};

const CardClient = ({ data }: PropsType) => {
  return (
    <div className="select-none cursor-pointer max-w-[220px] sm:max-w-[300px]">
      <img src={data.image} alt="client-logo" />
    </div>
  );
};

export default CardClient;
