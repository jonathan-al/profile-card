import React from "react"
import ReactDOM from "react-dom/client"
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
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="👶" color="orangered" />
    </div>
  )
}

const Skill = (props) => (
  <div className="skill" style={{ backgroundColor: props.color }}>
    <span>
      {props.skill} {props.emoji}
    </span>
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
