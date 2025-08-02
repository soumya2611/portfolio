import React from "react";

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-4xl hover:scale-110 transition-all duration-500 hover:text-black hover:bg-cyan h-14 w-14 border-orange text-orange rounded-full  p-3 flex items-center justify-center border-2 hover:border-cyan ">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
