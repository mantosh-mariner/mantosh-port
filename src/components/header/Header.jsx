import React, { useState }  from "react";

import "./header.css"

const Header =()=>{
    const [toggle, setToggle]=useState(false)

    const [actives , setActive]=useState(0);
    window.addEventListener("scroll" , function(){
        setActive(0)
        const scrollup=this.document.querySelector(".header");
        if(this.scrollY>=100) scrollup.classList.add("box-show")
            else scrollup.classList.remove("box-show")
    }
)


const Toggle =(index)=>{
    setActive(index);

}



    
    return (
        <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Mantosh Kumar</a>

            <div className={toggle? "nav__menu  show-menu": "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className={actives===1 ? "nav__link active-link active":"nav__link active-link "} onClick={()=>Toggle(1)} >
                            <i className="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className={actives===2 ? "nav__link active-link active":"nav__link active-link "} onClick={()=>Toggle(2)}>
                            <i className="uil uil-user nav__icon"></i>About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skill" className={actives===3 ? "nav__link active-link active":"nav__link active-link "} onClick={()=>Toggle(3)}>
                            <i className="uil uil-file-alt nav__icon"></i>Skill
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#service" className={actives===4 ? "nav__link active-link active":"nav__link active-link "} onClick={()=>Toggle(4)}>
                            <i className="uil uil-briefcase-alt nav__icon"></i>Service
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#project" className={actives===5 ? "nav__link active-link active":"nav__link active-link "} onClick={()=>Toggle(5)}>
                            <i className="uil uil-scenery nav__icon"></i>Project
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className={actives===6 ? "nav__link active-link active":"nav__link active-link "} onClick={()=>Toggle(6)}>
                            <i className="uil uil-message nav__icon"></i>Contact
                        </a>
                    </li>
                    
                   
                </ul>
                <i className="uil uil-times nav__close"  onClick={()=> setToggle(!toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={()=> setToggle(!toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>

        </header>
       
    )
}

export default Header ;