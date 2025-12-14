import React from "react";

const Users = () => {
  return (
    <div className="px-4 py-10  lg:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className=" leading-tight tracking-tight font-display text-slate-700 text-3xl  text-center mb-9 font-semibold">
          What our users say
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <div className="border border-[#e5e7eb] bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between">
            <p className="text-xl  font-normal font-body text-slate-600 mb-8">
              "Flowrise has made burnout a thing of the past. It's a
              game-changer for work-life balance. It's not just a productivity
              app—it's a lifestyle enhancer."
            </p>
            <div className="flex items-center">
              <img
                src="/user1.jpg"
                alt=""
                width="56"
                height="56"
                className="rounded-full mr-4 aspect-square"
              />
              <div>
                <p className="text-base font-medium text-slate-700">
                  Ayesha W.
                </p>
                <p className="text-[16px] text-slate-600">
                  Digital Marketing Specialist
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#e5e7eb] bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between">
            <p className="text-xl  font-normal font-body text-slate-600 mb-8">
              "Before Flowrise, I was always running against the clock. Now, I
              work in harmony with my natural rhythms. My productivity and
              wellbeing have never been better!"
            </p>
            <div className="flex items-center">
              <img
                src="/user2.jpg"
                alt=""
                width="56"
                height="56"
                className="rounded-full mr-4 aspect-square"
              />
              <div>
                <p className="text-[16px] font-medium text-slate-700">
                  Mark R.
                </p>
                <p className="text-[16px] text-slate-600">Nonprofit founder</p>
              </div>
            </div>
          </div>
          <div className="border border-[#e5e7eb] bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between">
            <p className="text-xl  font-normal font-body text-slate-600 mb-8">
              "Flowrise has revolutionized my workday! It adapts to my energy
              and helps me optimize my daily tasks. I'm more productive and
              happier than ever!"
            </p>
            <div className="flex items-center">
              <img
                src="/user3.jpg"
                alt=""
                height="56"
                width="56"
                className="rounded-full mr-4 aspect-square"
              />
              <div>
                <p className="text-[16px] font-medium text-slate-700">
                  Emily W.
                </p>
                <p className="text-[16px] text-slate-600">UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
