import React from "react"
import Portrait from "../images/325576556_1307460246492334_6162079594561817306_n.jpg"
import EmailLogo from "../images/email-logo-png-27.png"
import LinkedinLogo from "../images/Linkedin-logo-icon-png.png"

export default function Info() {
    return (
        <div className="info--container">
            <img src={Portrait} className="info--portrait" />
            <h1>Andres Garza</h1>
            <h3>Frontend Developer</h3>
            <h4>mywebsite.com</h4>
            <a href="mailto:74g4bond@gmail.com"><button className="info--emailb"><div><img src={EmailLogo} className="info--emailicon"/>Email</div></button></a>
            <a href="https://www.linkedin.com/in/andres-garza-bb6966233/" target="_blank"><button className="info--linkedinb"><div><img src={LinkedinLogo} className="info--linkedinicon"/>LinkedIn</div></button></a>
        </div>
    )
}