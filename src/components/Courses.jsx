import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const limit = 25;

const ProjectCard = ({ index, name, description, icon }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const fullDescription = description.join(" ");
  const words = fullDescription.split(" ");
  const truncatedDescription = words.slice(0, limit).join(" ");

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const toggleLess = () => {
    setShowFullDescription(false);
  };

  return (
    <div className="p-5 rounded-2xl sm:w-[360px] w-full">
      <img
        src={icon}
        alt="Image"
        className="text-white"
        style={{ width: "200px", height: "200px" }}
      />
      <div className="mt-5">
        <h3 className="text-white text-[24px]">{name}</h3>
        {showFullDescription ? (
          <>
            <p className="mt-2 text-white-100 text-[14px]">{fullDescription}</p>
            <button
              className="text-primary underline mt-1"
              onClick={toggleLess}
            >
              Read Less
            </button>
          </>
        ) : (
          <>
            <p className="mt-2 text-white-100 text-[14px]">
              {truncatedDescription}
            </p>
            {words.length > limit && (
              <button
                className="text-primary underline mt-1"
                onClick={toggleDescription}
              >
                Read More
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <div id="courses">
      <h2
        className={`primaryText md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-10`}
      >
        COMMON COURSES
      </h2>

      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Courses, "");
