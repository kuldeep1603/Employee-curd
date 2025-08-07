import React from "react";

const Input = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  id,
  name,
  className,
  required,
  disabled,
  readOnly,
  autoFocus,
  style,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        name={name}
        className={`input ${className}`}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        autoFocus={autoFocus}
        style={style}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
