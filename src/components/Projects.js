import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import { RiMovie2AiFill, RiTailwindCssFill } from "react-icons/ri";
import SingleProject from "./SingleProject";
import chat1 from "../assets/projects/chatGenius/chat1.png";
import chat2 from "../assets/projects/chatGenius/chat2.png";
import chat3 from "../assets/projects/chatGenius/chat3.png";
import chat4 from "../assets/projects/chatGenius/chat4.png";

import megamart1 from "../assets/projects/megamart/megamart1.png";
import megamart2 from "../assets/projects/megamart/megamart2.png";
import megamart3 from "../assets/projects/megamart/megamart3.png";
import megamart4 from "../assets/projects/megamart/megamart4.png";
import megamart5 from "../assets/projects/megamart/megamart5.png";
import megamart6 from "../assets/projects/megamart/megamart6.png";

import cineworld1 from "../assets/projects/cineworld/cineworld1.png";
import cineworld2 from "../assets/projects/cineworld/cineworld2.png";
import cineworld3 from "../assets/projects/cineworld/cineworld3.png";
import cineworld4 from "../assets/projects/cineworld/cineworld4.png";
import cineworld5 from "../assets/projects/cineworld/cineworld5.png";

import blog1 from "../assets/projects/blogbazzar/blog1.png";
import blog2 from "../assets/projects/blogbazzar/blog2.png";
import blog3 from "../assets/projects/blogbazzar/blog3.png";
import blog4 from "../assets/projects/blogbazzar/blog4.png";
import blog5 from "../assets/projects/blogbazzar/blog5.png";
import blog6 from "../assets/projects/blogbazzar/blog6.png";
import blog7 from "../assets/projects/blogbazzar/blog7.png";
import blog8 from "../assets/projects/blogbazzar/blog8.png";
import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="px-5 md:px-10 lg:px-28 py-4">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Projects</h1>
      <div className="mt-5 ml-5">
        <SingleProject
          id={1}
          title="🚀 ChatGenius – AI Chatbot"
          description="ChatGenius is an AI-driven chatbot built using the Gemini API. 
                  It allows users to ask any question and get intelligent responses in real-time."
          features={[
            "User authentication with JWT",
            "Real-time AI responses using Gemini API",
            "Chat history storage with MongoDB",
            "Responsive UI with Tailwind CSS",
          ]}
          techStack={[
            { icon: <FaReact />, name: "ReactJS" },
            { icon: <RiTailwindCssFill />, name: "TailwindCSS" },
            { icon: <FaNodeJs />, name: "NodeJS" },
            { icon: <FaDatabase />, name: "MongoDB" },
          ]}
          liveLink="https://chatgenius360.web.app/"
          githubLink="https://github.com/GantedaAravind/ChatGenius"
          images={[chat1, chat2, chat3, chat4]}
          ctaLive="🤖 Chat with AI"
          ctaCode="GitHub Code"
        />

        <SingleProject
          id={2}
          title="🛒 MegaMart – E-commerce Platform"
          description="MegaMart is a full-fledged e-commerce platform built with the MERN stack, 
                  offering a seamless shopping experience with advanced features."
          features={[
            "User authentication & authorization with JWT",
            "Product management with MongoDB",
            "Fully responsive UI with Tailwind CSS",
          ]}
          techStack={[
            { icon: <FaReact />, name: "ReactJS" },
            { icon: <RiTailwindCssFill />, name: "TailwindCSS" },
            { icon: <FaNodeJs />, name: "NodeJS" },
            { icon: <FaDatabase />, name: "MongoDB" },
          ]}
          liveLink="https://megamart3.web.app"
          githubLink="https://github.com/GantedaAravind/MegaMart"
          images={[
            megamart1,
            megamart2,
            megamart3,
            megamart4,
            megamart5,
            megamart6,
          ]}
          ctaLive="🛒 Start Shopping"
          ctaCode="GitHub Code"
        />

        <SingleProject
          id={3}
          title="🎬 CiniWorld365 – Movie Discovery Platform"
          description="CiniWorld365 is an interactive movie web application built using React and the TMDB API. 
                  It allows users to explore movies, view details, and discover trending films."
          features={[
            "Dynamic movie search and filtering",
            "Detailed movie information with real-time data",
            "Responsive UI with Tailwind CSS & Bootstrap",
            "Integration with TMDB API for movie data",
          ]}
          techStack={[
            { icon: <FaReact />, name: "ReactJS" },
            { icon: <RiTailwindCssFill />, name: "TailwindCSS" },
            { icon: <RiMovie2AiFill />, name: "TMDB API" },
          ]}
          liveLink="https://cineworld365.web.app/"
          githubLink="https://github.com/GantedaAravind/CiniWorld365"
          images={[cineworld1, cineworld2, cineworld3, cineworld4, cineworld5]}
          ctaLive="🎥 Explore Movies"
          ctaCode="GitHub Code"
        />

        <SingleProject
          id={4}
          title="📝 BlogBazzar – Blogging Platform"
          description="BlogBazzar is a powerful blogging platform built with the MERN stack, allowing users to write, share, and manage blog posts."
          features={[
            "User authentication with JWT",
            "Create, edit, and delete blog posts",
            "Rich text editor for content formatting",
            "Responsive UI with Tailwind CSS",
          ]}
          techStack={[
            { icon: <FaReact />, name: "ReactJS" },
            { icon: <RiTailwindCssFill />, name: "TailwindCSS" },
            { icon: <FaNodeJs />, name: "NodeJS" },
            { icon: <FaDatabase />, name: "MongoDB" },
          ]}
          liveLink="https://blogbazzar365.web.app/"
          githubLink="https://github.com/GantedaAravind/BlogBazzar"
          images={[blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8]}
          ctaLive="📝 Explore Blogs"
          ctaCode="GitHub Code"
        />
      </div>
    </div>
  );
});

export default Projects;
