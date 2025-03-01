import Lottie from "lottie-react";
import { motion } from "framer-motion";
const SingleSkill = ({ title, animation }) => {
  return (
    <div className="border-1 border-cyan-300  m-1  rounded-xl">
      <h2 className="text-center w-full text-lg">{title}</h2>
      <div
        className={`relative ${
          ["CSS", "MongoDB"].includes(title) ? "top-[-20px]" : ""
        } w-28 h-28 sm:w-32 sm:h-32  md:w-36 md:h-36 lg:w-40 lg:h-40 `}
      >
        <Lottie animationData={animation} />
      </div>
    </div>
  );
};
export default SingleSkill;
