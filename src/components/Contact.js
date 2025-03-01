import { forwardRef } from "react";
import { motion } from "framer-motion";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="px-5 md:px-10 lg:px-28 py-4">
      <div className="mt-5 ml-5">
        <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl">
          Contact Details
        </h2>
        {/* details */}
        <div className=" mx-auto mt-10 w-fit">
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2,
            }}
            viewport={{ once: true, amount: 1 }}
            className="flex items-center flex-wrap"
          >
            <span className="p-1 flex items-center gap-2 text-base sm:text-md md:text-lg lg:text-xl text-cyan-300">
              <MdEmail /> Email :
            </span>
            <p className="">aravindganteda@gmail.com</p>
            <a
              href="mailto:aravindganteda@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline btn-info m-2">
                Send a Mail
              </button>
            </a>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2,
            }}
            viewport={{ once: true, amount: 1 }}
            className="flex items-center flex-wrap"
          >
            <span className="p-1 flex items-center gap-2 text-base sm:text-md md:text-lg lg:text-xl text-cyan-300">
              <BiSolidPhoneCall /> Phone :
            </span>{" "}
            +91 7993425684
            <a
              href="tel:+917993425684"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline btn-info m-2">
                Make a Call
              </button>
            </a>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex items-center flex-wrap"
          >
            <span className="p-1 flex items-center gap-2 text-base sm:text-md md:text-lg lg:text-xl text-cyan-300">
              <FaGithub /> Github :
            </span>
            @GantedaAravind
            <a
              href="https://github.com/GantedaAravind/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline btn-info m-2">
                Github Profile
              </button>
            </a>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex items-center flex-wrap"
          >
            <span className="p-1 flex items-center gap-2 text-base sm:text-md md:text-lg lg:text-xl text-cyan-300">
              <FaLinkedin /> LinkedIn :
            </span>
            <a
              href="https://www.linkedin.com/in/ganteda-aravind-113b2427a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline btn-info m-2">
                LinkedIn Profile
              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex items-center flex-wrap"
          >
            <span className="p-1 flex items-center gap-2 text-base sm:text-md md:text-lg lg:text-xl text-cyan-300">
              <RiInstagramFill /> Instagram :
            </span>
            <a
              href="https://www.instagram.com/aravindganteda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline btn-info m-2">
                Fallow Me
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
