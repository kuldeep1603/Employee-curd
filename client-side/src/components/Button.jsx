import React from "react";

const Button = ({
  text,
  className,
  style,
  id,
  onClick,
  type,
  disabled,
  name,
}) => {
  return (
    <div>
      <button
        className={`btn ${className}`}
        style={style}
        id={id}
        onClick={onClick}
        type={type}
        disabled={disabled}
        name={name}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
