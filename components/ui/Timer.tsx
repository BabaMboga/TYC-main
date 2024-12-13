import React from "react";

const Timer = () => {
  return (
    <div className="flex justify-start mt-10 gap-3">
      <span className="flex flex-col justify-center items-center bg-black text-yellow text-5xl w-36 py-3 shadow-lg rounded-lg">
        1
        <small className="text-sm uppercase font-semibold text-white">
          {" "}
          Days
        </small>
      </span>
      <span className="flex flex-col justify-center items-center bg-black text-yellow text-5xl w-36 py-3 shadow-lg rounded-lg">
        1
        <small className="text-sm uppercase font-semibold text-white">
          {" "}
          Hours
        </small>
      </span>
      <span className="flex flex-col justify-center items-center bg-black text-yellow text-5xl w-36 py-3 shadow-lg rounded-lg">
        1
        <small className="text-sm uppercase font-semibold text-white">
          {" "}
          Minutes
        </small>
      </span>
      <span className="flex flex-col justify-center items-center bg-black text-yellow text-5xl w-36 py-3 shadow-lg rounded-lg">
        1
        <small className="text-sm uppercase font-semibold text-white">
          {" "}
          Seconds
        </small>
      </span>
    </div>
  );
};

export default Timer;
