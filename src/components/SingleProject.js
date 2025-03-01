import { useState } from "react";
import { FaLink, FaCode } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const SingleProject = ({
  title,
  description,
  features,
  techStack,
  id,
  liveLink,
  githubLink,
  images,
  ctaLive,
  ctaCode,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
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
      viewport={{ once: true, amount: 0.2 }}
      className="border-2 md:border-none border-cyan-300 p-2 rounded-xl mt-5"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
        {title}
      </h2>
      <div
        className={`flex ${
          id % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
        } flex-col-reverse  gap-4 items-center`}
      >
        {/* Project Info */}
        <div className="md:w-1/2 p-2">
          <p className="italic font-bold text-base sm:text-md md:text-lg lg:text-xl mt-3">
            Description:
          </p>
          <p className="text-base md:text-md xl:text-lg indent-10">
            {description}
          </p>

          <div className="mt-5">
            <span className="pr-2">💡 Key Features:</span>
            <ul className="list-decimal px-10 py-2">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h2 className="text-base sm:text-md md:text-lg lg:text-xl font-bold italic">
              Tech Stack:
            </h2>
            <ul className="flex items-center gap-2 flex-wrap">
              {techStack.map((tech, index) => (
                <li key={index} className="flex items-center gap-1">
                  {tech.icon} <p>{tech.name},</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-evenly mt-3 flex-wrap">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="m-1"
            >
              <button className="btn btn-outline btn-accent flex items-center">
                <FaLink />
                <p>{ctaLive}</p>
                <FiExternalLink />
              </button>
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="m-1"
            >
              <button className="btn btn-outline btn-secondary flex items-center">
                <FaCode />
                <p>{ctaCode}</p>
                <FiExternalLink />
              </button>
            </a>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="md:w-1/2">
          <div className="carousel w-full relative">
            <div className="carousel-item relative w-full">
              <motion.img
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 2, delay: 0.5 }}
                src={images[currentSlide]}
                className="w-full"
                alt="Project Screenshot"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button onClick={prevSlide} className="btn btn-circle">
                  ❮
                </button>
                <button onClick={nextSlide} className="btn btn-circle">
                  ❯
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
