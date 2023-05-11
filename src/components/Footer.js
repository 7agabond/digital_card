import React from "react"
import GitHubIcon from "../images/25231.png"
import TwitterIcon from "../images/2111819.png"
import FacebookIcon from "../images/59439.png"
import InstagramIcon from "../images/1384031.png"

export default function Footer() {
    return(
        <footer className="footer--container">
            <a href="https://github.com/7agabond" target="_blank"><img src={GitHubIcon} className="footer--githubi"/></a>
            <a href="https://twitter.com/74g4bond" target="_blank"><img src={TwitterIcon} className="footer--twitteri"/></a>
            <a href="https://www.facebook.com/7agabond/" target="_blank"><img src={FacebookIcon} className="footer--facebooki"/></a>
            <a href="https://www.instagram.com/7aga8ond/?fbclid=IwAR1lKTC3x3Chz5mY-45XbPbf8bv9mJ-EZCeOP5tjl8oz-UxALrYBQzJ6Vls" target="_blank"><img src={InstagramIcon} className="footer--instagrami"/></a>
        </footer>
    )
}