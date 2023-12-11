import React from "react"
import ReactDOM from "react-dom/client"
import { skillIcons, skills } from "../src/data"
import "./index.css"

const Avatar = () => (
  <img className="avatar" src="profile.jpg" alt="jonas" />
)

const Intro = () => (
  <>
    <h1>Jonathan Alcantara</h1>
    <p>
      Full-stack web developer. When not coding I enjoy playing
      guitar, traveling with my family, and spending time with my
      baby, which provides me with a sense of balance and creativity.
    </p>
  </>
)

const SkillList = () => {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          skill={skill.skill}
          emoji={skillIcons[skill.level]}
          color={skill.color}
        />
      ))}
    </div>
  )
}

const Skill = ({ skill, color, emoji }) => (
  <div className="skill" style={{ backgroundColor: color }}>
    <span>{skill}</span>
    <span>{emoji}</span>
  </div>
)

const App = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>
)
