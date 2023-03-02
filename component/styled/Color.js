import React from "react";
import { FaCheck } from "react-icons/fa";
const Color = ({ colors, mainColor, handleColor }) => {
  
  
  return (
    <>
      <ul className="colors ps-0">
        {colors.map((color, index) => {
          return (
            <li key={index} onClick={()=>handleColor(color)} style={{ backgroundColor: color }}>
              {mainColor == color ? (<FaCheck className="checkStyle" />) : null }
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Color;
