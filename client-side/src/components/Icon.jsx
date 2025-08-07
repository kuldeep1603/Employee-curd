import React from "react";

const Icon = ({ title, classname, width, height, style }) => {
  return (
    <svg className={classname} width={width} height={height} style={style}>
      <use xlinkHref={`/assets/spirte.svg#icon-${title}`} />
    </svg>
  );
};

export default Icon;
