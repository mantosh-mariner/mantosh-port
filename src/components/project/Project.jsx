import React from 'react';
import { projects } from './content';
import github from "../../assets/github.png"
import coming from "../../assets/coming.jpg"
import "./project.css"

export const Project = () => {
  return (
    <section className="project section" id='project'>
      <h2 className="section__title">Project</h2>
      <span className="section__subtitle">What I did</span>

      <div className="project__container container">
        {projects.map((content, index) => (
          <div key={index} className="project__container-sub">
      
            <div className="project__img">
            
              <img className='img' src={content.image} alt={`${content.name} project`} />
              <a href="https://github.com/mantosh-mariner" target='blank'>
              <img className='github' src={github} alt="" style={{  backgroundColor:"black" , height:"60px", width:"60px", borderRadius:"48%"}} />
              </a>
            </div>
            <h2>{content.name}</h2>
            <p>{content.description}</p>
            <div>
              {content.tags.map((tech, techIndex) => (
                <span key={techIndex} style={{ color: `${tech.color}`}}>
                  #{tech.name}{" "}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div  className="project__container-sub">
      
            <div className="project__img">
            
              <img className='img' src={coming}/>
              <a href="https://github.com/mantosh-mariner" target='blank'></a>
              <img className='github' src={github} alt="" style={{  backgroundColor:"black" , height:"60px", width:"60px", borderRadius:"48%"}} />
           
            </div>
            <h2>Coming Soon</h2>
            <p> Coming Soon</p>
            <div>
            
                <span >
                #Mysql #java ..........
                </span>
             
            </div>
          </div>
      </div>
    </section>
  );
};