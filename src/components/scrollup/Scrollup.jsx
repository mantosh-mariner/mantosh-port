import React from 'react'
import "./scroll.css"
export const Scrollup = () => {

    window.addEventListener("scroll" , function(){
        const scrollup=this.document.querySelector(".scrollup");
        if(this.scrollY>=100) scrollup.classList.add("show-scroll")
            else scrollup.classList.remove("show-scroll")
    }
)
  return (
    <a href="#home" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon" ></i>
    </a>
  )
}


