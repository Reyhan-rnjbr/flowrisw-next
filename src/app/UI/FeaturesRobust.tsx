import React from "react";

const FeaturesRobust = () => {
  return (
    <>
      <div className="px-4 py-10 md:py-14 md:px-6 lg:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 place-items-center">
            <img
              src="/feature1.jpg"
              alt=""
              width="580"
              height="639"
              className="rounded-lg"
            />
            <div className="grid gap-4">
              <h2 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-4xl md:text-5xl">
                Harmonize your schedule
              </h2>
              <p className="max-w-md text-[18px] font-body text-slate-600">
                Align tasks with your natural energy rhythms. Embrace tailored
                productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-10 md:py-14 md:px-6 lg:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 place-items-center">
            <img
              src="/feature2.jpg"
              alt=""
              width="580"
              height="585"
              className="rounded-lg md:order-2"
            />
            <div className="grid gap-4">
              <h2 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-4xl md:text-5xl">
                Mindful task tracking
              </h2>
              <p className="max-w-md text-[18px] font-body text-slate-600">
                Blend productivity with mindfulness. Understand your patterns,
                enhance focus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-10 md:py-14 md:px-6 lg:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 place-items-center">
            <img
              src="/feauter3.jpg"
              alt=""
              width="580"
              height="585"
              className="rounded-lg"
            />
            <div className="grid gap-4">
              <h2 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-4xl md:text-5xl">
                Productivity and self care
              </h2>
              <p className="max-w-md text-[18px] font-body text-slate-600">
                Beyond task completion. Embrace self-care routines, foster a
                healthier lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesRobust;
