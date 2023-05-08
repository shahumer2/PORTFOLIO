import React from 'react'
import "./Footer.css"
import wave from "../../img/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Github from "@iconscout/react-unicons/icons/uil-github"
function Footer() {
    return (
        <div className="footer">
            <img src={wave} alt="" />
            <div className="f-content">
                <span> shah.umer8493@gmail.com</span>
                <div className="f-icons">
                    <a href="https://www.instagram.com/shah.umerr">
                        <Insta color='white' />
                    </a>
                    <a href="https://www.facebook.com/shah.umer2/">
                        <Facebook color='white' />
                    </a>
                    <a href="https://github.com/shahumer2">
                        <Github color="white" />
                    </a>

                </div>
            </div>

        </div>
    )
}

export default Footer