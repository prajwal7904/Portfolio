import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import "./skills.css";
const Skills = () => {
  return (
    <section className="skill section" id="skills">
    <h2 className="about_title">Skills</h2>
    <span className="about_subtitle">My technical skills</span>
    <div className="skill_container container grid">
        <Frontend/>
       <Backend/>
    </div>
    </section>
  )
}

export default Skills