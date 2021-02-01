import React from "react";

export const ColorfullMessage = (props) => {
  const { color, fontsize, children} = props;
  console.log(props);
  const contentStyle = {
    color,
    fontSize: fontsize
  };
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfullMessage;
