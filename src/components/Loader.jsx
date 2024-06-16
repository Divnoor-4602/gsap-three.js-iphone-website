import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="w-10 h-10 border-2 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
