import { TypeAnimation } from "react-type-animation";

const Typer = () => {
  return (
    <TypeAnimation
      sequence={[
        "MERN Stack Developer 🚀",
        1000,
        "React Enthusiast ⚛️",
        1000,
        "Backend Developer 🛠️",
        1000,
        "Frontend Developer 🎨",
        1000,
        "Node.js Developer 🌐",
        1000,
        "Problem Solver 🔥",
        1000,
      ]}
      speed={50}
      style={{ fontSize: "2em", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
      repeat={Infinity}
    />
  );
};
export default Typer;
