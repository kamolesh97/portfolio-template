'use client';

const Button = ({ label }) => {
  return (
    <div className="flex">
      <div className="ml-2 mt-2 h-[75px] w-[250px] bg-gradient-to-r from-fuchsia-600 to-pink-600">
        <div className="-ml-2 -mt-2 flex h-[75px] w-[250px] cursor-pointer items-center justify-center bg-white">
          <span className="text-lg">{label}</span>
        </div>
      </div>
    </div>
  );
};

export default Button;
