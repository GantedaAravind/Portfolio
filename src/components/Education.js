import { forwardRef } from "react";
import { motion } from "framer-motion";

const Education = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="relative px-5 md:px-10 lg:px-28 py-4">
      <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl text-center">
        Education
      </h2>

      <div className="flex justify-center relative mt-2 ">
        {/* Timeline Line (Responsive Alignment) */}
        <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Top Circle (Responsive Alignment) */}
        <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-white rounded-full border-2 border-cyan-300"></div>

        {/* Bottom Circle (Responsive Alignment) */}
        <div className="absolute left-3 md:left-1/2 bottom-0 transform md:-translate-x-1/2 w-5 h-5 bg-white rounded-full border-2 border-cyan-300"></div>

        <div className="mt-5 w-full ml-5 md:ml-0">
          {/* B.Tech */}
          <motion.div
            initial={{
              opacity: 0,
              y: -100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2,
            }}
            viewport={{ once: true, amount: 1 }}
            className="relative  md:w-1/2 ml-auto md:ml-0 md:mr-auto p-10"
          >
            {/* Triangle Pointer */}
            <div className="absolute hidden md:block  right-0 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[40px] border-l-cyan-300"></div>
            <div className="absolute md:hidden left-0 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[40px] border-r-cyan-300"></div>

            <div className="rounded-b-xl rounded-tr-xl  md:rounded-tr-none rounded-tl-none md:rounded-tl-xl p-4 bg-cyan-300 text-black">
              <h2 className="text-md md:text-lg lg:text-xl font-bold">
                B.Tech in Computer Science & Engineering
              </h2>
              <h4 className="text-base md:text-md lg:text-lg  font-thin italic">
                Rajiv Gandhi University of Knowledge and Technologies, AP
              </h4>
              <div className="flex items-center justify-between text-base md:text-md lg:text-lg">
                <p>2022-2026</p>
                <p className=" font-medium">CGPA : 9.38/10</p>
              </div>
            </div>
          </motion.div>

          {/* PUC */}
          <motion.div
            initial={{
              opacity: 0,
              y: -100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2,
            }}
            viewport={{ once: true, amount: 1 }}
            className="relative md:w-1/2 ml-auto p-10"
          >
            {/* Triangle Pointer */}
            <div className="absolute left-0 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[40px] border-r-cyan-300"></div>

            <div className="rounded-b-xl rounded-tr-xl p-4 bg-cyan-300 text-black">
              <h2 className="text-md md:text-lg lg:text-xl font-bold">
                Pre University Course
              </h2>
              <h4 className="text-base md:text-md lg:text-lg font-thin italic">
                Rajiv Gandhi University of Knowledge and Technologies, AP
              </h4>
              <div className="flex items-center justify-between text-base md:text-md lg:text-lg">
                <p>2020-2022</p>
                <p className=" font-medium">CGPA : 9.93/10</p>
              </div>
            </div>
          </motion.div>

          {/* 10th */}
          <motion.div
            initial={{
              opacity: 0,
              y: -100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2,
            }}
            viewport={{ once: true, amount: 1 }}
            className="relative md:w-1/2 ml-auto md:ml-0 md:mr-auto p-10"
          >
            {/* Triangle Pointer */}
            <div className="absolute hidden md:block  right-0 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[40px] border-l-cyan-300"></div>
            <div className="absolute md:hidden left-0 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[40px] border-r-cyan-300"></div>

            <div className="rounded-b-xl rounded-tr-xl  md:rounded-tr-none rounded-tl-none md:rounded-tl-xl p-4 bg-cyan-300 text-black">
              <h2 className="text-md md:text-lg lg:text-xl font-bold">
                Secondary Education
              </h2>
              <h4 className="text-base md:text-md lg:text-lg font-thin italic">
                Zilla Parishad High School, Garugubilli, Parvathipuram(Dt), AP
              </h4>
              <div className="flex items-center justify-between text-base md:text-md lg:text-lg">
                <p>2018-2020</p>
                <p className="font-medium">Marks : 594/600</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default Education;
