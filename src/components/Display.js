import Typer from "./Typer";
import { motion } from "framer-motion";
import { VscGithub } from "react-icons/vsc";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { forwardRef } from "react";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import aravind from "../assets/aravind.png";

const Display = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex justify-around lg:px-28 pt-4 gap-10  flex-col-reverse md:flex-row"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 2,
        }}
        className="md:w-[45vw] flex flex-col px-5 md:px-10 justify-center"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl mb-3">
          Hi, I'm Aravind
        </h2>
        <div>
          <span className="text-lg md:text-xl lg:text-2xl">I'm a </span>
          <span className="text-cyan-300">
            <Typer />
          </span>
        </div>

        <div className="my-3 first-letter:text-lg sm:first-letter:text-xl md:first-letter:text-2xl text-base md:text-md lg:text-lg">
          <TypeAnimation
            sequence={[
              "I’m a MERN stack developer 🚀 passionate about building scalable and \
          efficient web apps. I specialize in MongoDB, Express.js, React.js, and \
          Node.js 🛠️, crafting dynamic user experiences and robust backends. I \
          love exploring new technologies 💡, optimizing performance ⚡, and \
          writing clean code ✨. Check out my projects—let’s build something \
          amazing together! 🚀",
              3000, // Wait 3 seconds after typing
              "I’m a MERN stack developer 🚀 passionate about building scalable and \
          efficient web apps. I specialize in MongoDB, Express.js, React.js, and \
          Node.js 🛠️, crafting dynamic user experiences and robust backends. I \
          love exploring new technologies 💡, optimizing performance ⚡, and \
          writing clean code ✨. Check out my projects—let’s build something \
          amazing together! 🚀",
            ]}
            omitDeletionAnimation={true}
            style={{ fontSize: "1em", display: "block", minHeight: "200px" }}
            repeat={0} // Ensures animation plays only once
          />
        </div>
        <div className="flex items-center mt-8 gap-4 justify-around mx-auto ">
          <a
            href="https://www.instagram.com/aravindganteda/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-cyan-300 rounded-3xl mx-5 hover:cursor-pointer hover:scale-125 transition-all duration-75"
          >
            <AiFillInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/ganteda-aravind-113b2427a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-cyan-300 mx-5 hover:cursor-pointer hover:scale-125 transition-all duration-75"
          >
            <TbBrandLinkedinFilled />
          </a>

          <a
            href="https://github.com/GantedaAravind/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-cyan-300 mx-5 hover:cursor-pointer hover:scale-125 transition-all duration-75"
          >
            <VscGithub />
          </a>
        </div>
        <div className="flex items-center justify-center mt-10">
          <a
            href={"/Aravind_Ganteda_Resume.pdf"}
            download="Aravind_Ganteda_Resume.pdf"
          >
            <button className="btn btn-outline btn-info ">
              <span>Download Resume</span>
              <span className="text-xl">
                <IoCloudDownloadSharp />
              </span>
            </button>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="md:w-[40vw] flex items-center justify-center my-6 md:my-20 lg:my-28 "
      >
        <div className="rounded-full border-2 border-cyan-300  overflow-hidden w-2/3 ">
          <img src={aravind} />
        </div>
      </motion.div>
    </div>
  );
});

export default Display;
