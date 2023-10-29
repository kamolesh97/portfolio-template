const Info = ({ label, value }) => {
  return (
    <div className="flex w-[200px] items-center justify-center px-[20px] font-sans">
      <p className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent ">
        {value}
      </p>
      <span className="ml-4 text-white">{label}</span>
    </div>
  );
};

export default Info;
