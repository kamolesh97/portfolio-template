const Info = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center justify-center px-[40px] font-sans md:w-[200px] md:flex-row md:px-[20px]">
      <p className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent ">
        {value}
      </p>
      <span className="whitespace-break-spaces text-center text-white md:ml-4 md:text-start">
        {label}
      </span>
    </div>
  );
};

export default Info;
