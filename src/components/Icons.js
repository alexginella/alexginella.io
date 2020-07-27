import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGit,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import "./styles.css"

//hunt henrick summerill koens li pasari ken garret perera lai michaels nestleroad cervine kelly decap clam harrison vlasik fletch levy steve musal mr.G gosky kohn roth christensen hutchensn sauceda madam reynolds huyck dan hogan

function Icons(){
    return (
        <div>
            <a href="https://www.linkedin.com/in/alex-ginella/" target="blank_"
               className="facebook social">
               <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/alexginella" 
               className="facebook social" target="blank_">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.facebook.com/alex.ginella"
               className="facebook social" target="blank_">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/ginillabean/"
               className="facebook social" target="blank_">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            
        </div>
    )
}

export default Icons;