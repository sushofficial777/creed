import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../Graph.css";

const CustomExpandButton = (node) => {
  return (
    <>
      {node && (
        <div className="expand-btn">
          <span>{node.data._directSubordinates}</span>
          <span>{node.children ? <FaAngleUp /> : <FaAngleDown />}</span>
        </div>
      )}
    </>
  );
};

export default CustomExpandButton;
