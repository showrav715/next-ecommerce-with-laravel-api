import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname, handleChange } = props;
  
  return (
    <div>
      <input
        type={type}
        name={name}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        className={`form-control ${classname}`}
      />
    </div>
  );
};

export default CustomInput;