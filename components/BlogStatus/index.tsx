import React from "react";
interface statusProps {
  status: string;
}
function BlogStatus({ status }: statusProps) {
  let textColor = "";
  let backgroundColor = "";

  if (status === "Approved") {
    textColor = "#03543F";
    backgroundColor = "#DEF7EC";
  } else if (status === "Pending") {
    textColor = "#723B13";
    backgroundColor = "#FDF6B2";
  } else if (status === "Expired") {
    textColor = "#9B1C1C";
    backgroundColor = "#FDE8E8";
  }

  const divStyle = {
    color: textColor,
    backgroundColor: backgroundColor,
    fontSize: "14px",
    lineHeight: "21px",
    borderRadius: "8px",
    padding: "10px",
  };

  return <div style={divStyle}>{status}</div>;
}

export default BlogStatus;
