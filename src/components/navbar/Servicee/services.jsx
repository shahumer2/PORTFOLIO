import React from 'react'
import "./services.css"
import heart from "../../../img/heartemoji.png"
import glasses from "../../../img/glasses.png"
import humble from "../../../img/humble.png"
import Resume from "./resume.pdf"
import Card from '../Cards/Card'
import { motion } from "framer-motion"
function services() {
    return (
        // left side
        <div className="services" id='Services'>

            <div className="awesome">
                <span>My Awesome</span>
                <span> Services</span>
                <span> I Have a Ability To Solve Complex Problem Quickly </span>
                <a href={Resume} download>
                    <button className='btn btn-warning s-button'>DOWNLOAD CV</button>
                </a>
            </div>

            <div className="cards">
                <motion.div
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-1rem" }}
                    transition={{ duration: 2, type: "spring" }}




                    style={{ left: "30rem", top: "5rem" }}>
                    <Card image={heart} heading={"Front end"} details={"React, Vanilla javaScript,html,css"} />
                </motion.div>
                <motion.div
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "30rem" }}
                    transition={{ duration: 2, type: "spring" }}



                    div style={{ left: "13rem" }}>
                    <Card image={glasses} heading={"Backend"} details={"Node Js, MongoDb, Mongoose"} />

                </motion.div>
                <motion.div
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-1rem" }}
                    transition={{ duration: 2, type: "spring" }}



                    style={{ left: "30rem", top: "-11rem" }}>
                    <Card image={heart} heading={"Intrest"} details={"I love To Go Out For Adventures"} />
                </motion.div>


            </div>

        </div>

    )
}

export default services