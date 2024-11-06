import React from "react";
import leetcodeLogo from "../../images/leetcode.png";
import gfg from "../../images/gfg.png"

const Social=()=>{

    return(
        <div className="home__social">
        
            <a href="https://www.linkedin.com/in/mantosh-kumar-9123801a1/" className="home__social-icon" target="blank">

                <i className="uil uil-linkedin"></i>
            </a>

            <a href="https://leetcode.com/u/mantosh_kumar04/" className="home__social-icon" target="blank">
            <img src={leetcodeLogo} alt="leetcode" className="uil"  style={{height:20}} />
            </a>
              <a href="https://www.geeksforgeeks.org/user/mantosh_mariner/" className="home__social-icon" target="blank">
              
              <i className="uil "><img src={gfg} alt="" className="uil"style={{height:20}} /></i>
              
              </a>

              <a href="https://github.com/mantosh-mariner" className="home__social-icon" target="blank">
              <i className="uil uil-github"></i>
              </a>
              
        </div>
           
    
    )
}
export default Social