import React from "react";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div id="about">
      Currently, We are executing work orders from the governments of Jharkhand
      and Haryana, with an installed residential training capacity of 3000
      candidates per quarter.
      <div className="grid grid-cols-1 mddd:grid-cols-2 gap-10 mt-10">
        <span className="border border-white rounded-lg px-6 py-2 text-white font-semibold hover:bg-primary-one cursor-default transition duration-300 ease-in-out">
          35000+ BENIFICIARIES TRAINED
        </span>
        <span className="border border-white rounded-lg px-6 py-2 text-white font-semibold hover:bg-primary-one cursor-default transition duration-300 ease-in-out">
          50%+ PLACED
        </span>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "");
