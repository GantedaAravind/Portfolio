import reactAnimation from "../assets/skills/react.json";
import react_phone_Animation from "../assets/skills/react_phone.json";
import nodejsAnimation from "../assets/skills/nodejs.json";
import htmlAnimation from "../assets/skills/html.json";
import cssAnimation from "../assets/skills/css.json";
import javascriptAnimation from "../assets/skills/javascript.json";
import mongodbAnimation from "../assets/skills/mongodb.json";
import mysqlAnimation from "../assets/skills/mysql.json";
import pythonAnimation from "../assets/skills/python.json";
import cAnimation from "../assets/skills/c.json";

import javaAnimation from "../assets/skills/java.json";
import { forwardRef } from "react";
import SingleSkill from "./SingleSkill";

const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="px-5 md:px-10 lg:px-28 py-4">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Skills</h1>
      <div className="mt-5 ml-5">
        <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl">
          Web Devlopement
        </h2>
        <div className="flex  flex-wrap items-center  ml-5 mt-2  ">
          {/* reactjs  */}
          <SingleSkill title={"ReactJS"} animation={reactAnimation} />

          {/* nodejs  */}
          <SingleSkill title={"NodeJs"} animation={nodejsAnimation} />

          {/* HTML  */}
          <SingleSkill title={"HTML"} animation={htmlAnimation} />

          {/* javascript  */}
          <SingleSkill title={"CSS"} animation={cssAnimation} />

          {/* html  */}
          <SingleSkill title={"Javascript"} animation={javascriptAnimation} />
        </div>

        <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl mt-5">
          Databases
        </h2>
        <div className="flex  flex-wrap items-center  ml-5 mt-2  ">
          {/* mongodb  */}
          <SingleSkill title={"MongoDB"} animation={mongodbAnimation} />

          {/* Mysql  */}
          <SingleSkill title={"MySQL"} animation={mysqlAnimation} />
        </div>

        <h2 className="text-md sm:text-lg md:text-xl mt-5 lg:text-2xl">
          Programming Langauages
        </h2>
        <div className="flex  flex-wrap items-center  ml-5 mt-2  ">
          {/* Python  */}
          <SingleSkill title={"Python"} animation={pythonAnimation} />

          {/* Java  */}
          <SingleSkill title={"Java"} animation={javaAnimation} />

          {/* "c" */}
          <SingleSkill title={"C"} renderer="canvas" animation={cAnimation} />
        </div>
      </div>
      <div></div>
    </div>
  );
});

export default Skills;
