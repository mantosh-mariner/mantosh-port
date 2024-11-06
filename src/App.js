import React from "react";
import Header from "./components/header/Header";


import Home from "./components/Home/Home";
import "./App.css"
import { About } from "./components/about/About";
import { Skill } from "./components/Skill/Skill";
import { Service } from "./components/service/Service";
import { Qualification } from "./components/qualification/Qualification ";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Project } from "./components/project/Project";
import { Scrollup } from "./components/scrollup/Scrollup";
// import { Testimonials } from "./components/testimonials/Testimonials";


const App=()=>{

    return(
        <>
            <Header/>
            <main className="main">
            <Home/>
            <About/>
            <Skill/>
            <Service/>
            <Qualification/>
            {/* <Testimonials/> */}
            <Project/>
            <Contact/>
            
            </main>
            
            <Footer/>
            <Scrollup/>

        </>
    )
}


export default  App;