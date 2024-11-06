import React from 'react'

export const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Trainning/<br/>Internship</h3>
            <span className="about__subtitle">Having 5+ </span>
        </div>
        <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>

            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">5+ projects</span>
        </div>
        <div className="about__box">
        <i className="bx bx-support"></i>
            <h3 className="about__title about__icon">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}
