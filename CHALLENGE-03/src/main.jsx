import { createRoot } from "react-dom/client";
import react from "react";
import "./styles.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="src/finalImage1.png" alt="profilePic" />
      <Intro />
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
      <h2>Jones Hamstring</h2>
      <p>
        Full-stack web developer at ratna global. When not coding i like to play
        board games, to cook (and eat), or to just enjoy the Chennai Sun at
        beach
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill, index) => (
        <Skill propsObj={skill} key={index} />
      ))}
    </ul>
  );
}

function Skill({ propsObj }) {
  return (
    <li className="skill" style={{ backgroundColor: propsObj.color }}>
      <span>{propsObj.skill}</span>
      <span>
        {propsObj.level === "beginner" && "👶"}
        {propsObj.level === "intermediate" && "👍"}
        {propsObj.level === "advanced" && "💪"}
      </span>
    </li>
  );
}

createRoot(document.getElementById("root")).render(
  <react.StrictMode>
    <App />
  </react.StrictMode>,
);
