import React from "react";
import "./Skeleton.css";

function Skeleton() {
  return (
    <div className="skeleton">
      {new Array(10).fill("").map((__, id) => (
        <div className="skeleton__item" key={id}>
          <div className="skeleton__img skeleton__anime"></div>
          <div className="skeleton__title skeleton__anime"></div>
          <div className="skeleton__desc skeleton__anime"></div>
          <div className="skeleton__btns">
            <div className="skeleton__title skeleton__anime"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
