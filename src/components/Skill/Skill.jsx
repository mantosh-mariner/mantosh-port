import React from 'react'
import "./skill.css"
import { Backend } from './Backend'
import { Frondend } from './Frondend'
export const Skill = () => {
  return (
   <section className="skills section" id="skill">
    <h2 className="section__title">Skills</h2>
    <span className="section__subtitle">My Technical level</span>

    <div className="skills__container container grid">
        <Frondend/>
        <Backend/>
    </div>
   </section>
  )
}
