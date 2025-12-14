import React from "react";

const Features = () => {
  return (
    <div className="px-4 py-10 md:py-14 md:px-6 lg:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div className="grid grid-rows-[1fr,auto,auto] h-fit">
            <h1 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-5xl md:text-7xl md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0">
              Features for finding focus
            </h1>
            <p className="text-2xl font-normal leading-10 font-body text-slate-600 mb-4 md:mb-8 max-w-md">
              Harness our innovative feature set to propel your productivity
              power. Make every moment count, stress less.
            </p>
            <button className="block w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wider mb-8 md:mb-10">
              Try for Free
            </button>
          </div>
          <img
            src="/fer.jpg"
            alt=""
            height="583"
            width="875"
            className="drop-shadow-xl max-w-4xl w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
