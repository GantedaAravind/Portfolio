import { Link } from "react-router";

const NavBar = ({
  handleAbout,
  handleContact,
  handleEducation,
  handleProjects,
  handleSkills,
}) => {
  return (
    <div className="navbar fixed bg-base-100 z-10 shadow-md">
      <div className="flex-1">
        <div>
          <Link
            to="/"
            className=" text-md cursor-pointer sm:text-lg md:text-xl lg:text-2xl px-4"
          >
            Aravind
          </Link>
        </div>
      </div>
      <div className="flex-none">
        <div className=" hidden md:block">
          <ul className="menu menu-horizontal px-4 text-base  sm:text-md md:text-lg lg:text-xl ">
            <li className="text-lg mx-4  hover:bg-cyan-500 rounded-lg">
              <Link to="/about" className="px-5" onClick={handleAbout}>
                About
              </Link>
            </li>
            <li className="text-lg mx-4  hover:bg-cyan-500 rounded-lg">
              <Link to="/education" className="px-4" onClick={handleEducation}>
                Education
              </Link>
            </li>
            <li className="text-lg  hover:bg-cyan-500  rounded-lg">
              <Link to="/skills" className="px-6" onClick={handleSkills}>
                Skills
              </Link>
            </li>
            <li className="text-lg  hover:bg-cyan-500  rounded-lg">
              <Link to="/projects" className="px-6" onClick={handleProjects}>
                projects
              </Link>
            </li>
            <li className="text-lg mx-4 hover:bg-cyan-500 rounded-lg">
              <Link to="/contact" onClick={handleContact}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="drawer drawer-end md:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>{" "}
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80">
              {/* Sidebar content here */}
              <li className="mt-2">
                <Link
                  to="/about"
                  onClick={handleAbout}
                  className=" hover:bg-cyan-300 text-md sm:text-lg md:text-xl lg:text-2xl px-4"
                >
                  About
                </Link>
              </li>
              <li className="my-2">
                <Link
                  className=" text-md  hover:bg-cyan-300  sm:text-lg md:text-xl lg:text-2xl px-4"
                  to="/education"
                  onClick={handleEducation}
                >
                  Education
                </Link>
              </li>
              <li className="my-2">
                <Link
                  className=" text-md  hover:bg-cyan-300  sm:text-lg md:text-xl lg:text-2xl px-4"
                  to="/education"
                  onClick={handleProjects}
                >
                  Projects
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="/skills"
                  onClick={handleSkills}
                  className=" text-md   hover:bg-cyan-300  sm:text-lg md:text-xl lg:text-2xl px-4"
                >
                  Skills
                </Link>
              </li>
              <li className="my-2 ">
                <Link
                  to="/contact"
                  onClick={handleContact}
                  className=" text-md  hover:bg-cyan-300   sm:text-lg md:text-xllg:text-2xl px-4"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
