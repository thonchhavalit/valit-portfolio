import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-6 sm:px-5 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
