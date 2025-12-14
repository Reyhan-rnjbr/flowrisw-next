import React from "react";

const Productivity = () => {
  return (
    <div className="px-4 py-10  lg:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 place-items-center text-center">
          <h1 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-5xl md:text-7xl mb-4 mt-12 first:mt-0 last:mb-0">
            Productivity that flows
            <br />
            with your life.
          </h1>
          <p className="text-2xl font-normal leading-10 font-body text-slate-600 mb-4 md:mb-8 max-w-md ">
            Unleash your potential by harmonizing your daily tasks and habits
            with your unique energy rhythms.
          </p>
          <button className="block w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wider mb-8 ">
            Try for free
          </button>
          <img
            src="/1.avif"
            alt=""
            className="drop-shadow-xl max-w-4xl w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Productivity;
