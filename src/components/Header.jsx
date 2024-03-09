import React from "react";
const Header = (props) => {
  return (
    <div className=" mb-10">
      <p className="text-gray-400">{props.category}</p>
      <p className="text-3xl font-extrabold tracking-tight dark:text-white text-slate-900">
        {props.title}
      </p>
    </div>
  );
};

export default Header;
