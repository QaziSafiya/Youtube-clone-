import React from "react";

const Button = (props) => {
  const { name } = props;
  return (
    <div>
      <button className="w-[70px] h-[30px] bg-black text-white rounded-md mx-3">
        {name}
      </button>
    </div>
  );
};

export default Button;
