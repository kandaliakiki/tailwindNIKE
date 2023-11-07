import React from "react";

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border 
      font-montserrat text-lg leading-none 
      ${!backgroundColor ? `bg-coral-red ` : `${backgroundColor} `} 
      ${!borderColor ? `border-coral-red ` : `${borderColor} `} 
      ${!textColor ? ` text-white` : `${textColor} `} 
      rounded-full `}
    >
      {label}{" "}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        ></img>
      )}
    </button>
  );
};

export default Button;
