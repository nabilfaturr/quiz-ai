import React from "react";

const UnauthorizedPage = () => {
  return (
    <div className="w-screen h-screen bg-red-600 flex items-center justify-center">
      <h1 className="text-2xl text-white font-bold">
        Oops you are not authorized!!
      </h1>
    </div>
  );
};

export default UnauthorizedPage;
