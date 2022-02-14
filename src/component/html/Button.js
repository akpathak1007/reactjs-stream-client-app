import React from "react";

const Button = ({ props, children }) => {
  const content = !children ? 'Click here' : children;
  return (
    <button
      className="btn btn-outline-success m-2"
      type="button"
      data-bs-target="#modal"
      data-bs-toggle="modal"
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
