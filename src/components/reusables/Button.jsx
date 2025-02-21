import React from "react";

const CommonButton = ({ 
  children, 
  onClick, 
  color = "gray", 
  className = "", 
  childClassName = "text-base font-semibold",
  icon: Icon, 
  ...props 
}) => {
  const colorClasses = {
    red: "bg-lightRed text-white",
    red1: "bg-lightRed text-white px-4",
    gray: "bg-gray-500 text-white",
    blue: "bg-lightBlue text-black",
    green: "bg-lightGreen text-black",
    dimRed: "bg-dimRed text-black",
  };

  return (
    <button
      className={`rounded-md flex items-center gap-1 p-2 ${colorClasses[color]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon className="w-6 h-6 text-white" />}
      <span className={childClassName}>{children}</span>
    </button>
  );
};

export default CommonButton;
