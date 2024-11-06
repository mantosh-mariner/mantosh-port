import React from 'react'
import "./qualification.css"

export const Qualification  = () => {
  return (
    
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
            <div className="qualification__button qualification__active button--flex">
             <i className="uil uil-graduation-cap qualification__icon"></i>{" "}Education
            </div>

            <div className="qualification__button button--flex">
                <i className="uil uil-briefcase-alt qualification__icon"  > </i> {" "}Experience
            </div>
            
            </div>

            <div className="qualification__sections">
                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"> Bachelore-CSE</h3>
                            <span className="qualification__subtitle">I K J Gujaral Punjab Technical university </span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022-Persent(May-2025)
                            </div>
                        </div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    

                    <div className="qualification__data">

                    <div></div>

                    <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">FullStack</h3>
                            <span className="qualification__subtitle">Besant Technologies  </span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Jul-2024-Nov-2024
                            </div>
                        </div>
                        
                    </div>



                    <div className="qualification__data">


                   
                        <div>
                            <h3 className="qualification__title">Diploma-CSE </h3>
                            <span className="qualification__subtitle">Govt Polytechnice College Darbhanga  </span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018-2021
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                    </div>

                    
                    
                </div>
                
            </div>
            
        </div>
    </section>
  )
}
