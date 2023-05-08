import React from 'react'
import "./Intro.css"
import github from "../../../img/github.png"
import linkedin from "../../../img/linkedin.png"
import instagram from "../../../img/instagram.png"
import Vector1 from "../../../img/Vector1.png"
import Vector2 from "../../../img/Vector2.png"
import boy from "../../../img/boy.png"
import Floatingdiv from '../FLoatingDiv/Floatingdiv'
import Crown from "../../../img/crown.png"
import thumbup from "../../../img/thumbup.png"
import glasses from "../../../img/glassesimoji.png"
import { motion } from "framer-motion"

function Intro() {

    return (
        <div className="intro" id='Home'>
            <div className="i-left">
                <div className="i-name">
                    <span> Hye I Am !</span>
                    <span> UMER MUKHTAR</span>
                    <span> Hye i Am a Web Developer Having experience in Mern Stack And Vanilla Java Script</span>
                </div>
                <a href="https://www.linkedin.com/in/umer-mukhtar-shah-58a225221/">
                    <button className=" btn btn-warning i-button">Hire Me</button>
                </a>

                <div className="i-icon">
                    <a href="https://github.com/shahumer2">
                        <img src={github} alt="https://github.com/shahumer2" />
                    </a>
                    <a href='https://www.linkedin.com/in/umer-mukhtar-shah-58a225221/'>
                        <img src={linkedin} alt="https://www.linkedin.com/in/umer-mukhtar-shah-58a225221/" />
                    </a>
                    <img src={instagram} alt="https://www.instagram.com/shah.umerr" />
                </div>
            </div>
            <div className="i-right">

                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={{ duration: 2, type: "spring" }}
                    className="floating-div"


                    src={glasses} alt="" />

                <motion.div
                    initial={{ top: "-8%" }}
                    whileInView={{ left: "60%" }}
                    transition={{ duration: 2, type: "spring" }}
                    className="floating-div1"


                    style={{ left: "58%", top: "-3%" }}>
                    <Floatingdiv image={Crown} txt1={"Web "} txt2={"Developer"} />

                </motion.div>
                <motion.div
                    initial={{ left: "9rem", top: "19rem" }}
                    whileInView={{ left: "45%" }}
                    transition={{ duration: 2, type: "spring" }}

                    className="floating-div"
                    style={{ left: "-8%", top: "70%" }}>
                    <Floatingdiv image={thumbup} txt1={"Best "} txt2={"Developer Award"} />
                </motion.div>


            </div>

        </div >
    )
}

export default Intro