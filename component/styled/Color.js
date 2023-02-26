import React from "react";

const Color = ({ colors }) => {
  return (
    <>
      <ul className="colors ps-0">
        {colors.map((color, index) => {
          return (
            <li key={index} style={{ backgroundColor: color }}>
              {" "}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Color;
