import React from "react";

const ProgressBar = ({ percent, color, partyId }) => {
  // const bgColor = color.find((c) => c.id === partyId);

  // console.log(bgColor);
  return (
    <div className="progressbar-wrapper">
      <div
        className="progressbar"
        style={{
          width: `${percent}%`,
          // backgroundColor: `${bgColor ? bgColor.color : "lightblue"}`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
