import React from "react";

const Unleash = () => {
  return (
    <div className="px-4 py-10 md:py-14 md:px-6 lg:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-4xl m-auto shadow-xl md:px-12 px-4 py-12 grid place-items-center rounded-lg bg-gradient-to-tr from-cyan-50 via-white to-emerald-50">
          <h2 className="leading-tight tracking-tight font-display text-slate-700 text-2xl md:text-3xl font-semibold text-center mb-4">
            Unleash your inner productivity
          </h2>
          <p className="text-center text-[16px] text-slate-600 mb-8">
            Sync your tasks and wellness to your unique rhythm.
          </p>
          <button className="block w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-[16px] tracking-wider">
            Try it free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unleash;
