import React from 'react'
import "./works.css"

import Upwork from "../../../img/Upwork.png"
import fiverr from "../../../img/fiverr.png"
import Amazon from "../../../img/amazon.png"
import Shopify from "../../../img/Shopify.png"
import Facebook from "../../../img/Facebook.png"
import { motion } from "framer-motion"
function works() {
    return (
        <div className='works' id='Testimonials'>
            <div className="awesome">
                <span>Works For</span>
                <span> Brands And Companies</span>
                <br />
                <span> Code Clause </span>

                <br />
                <span>Currently Working In  Alamdar </span>
                <br />
                <span> I Have a Ability To Solve Complex Problem Quickly  </span>
                <br />

                <button className='btn btn-warning s-button'>Hire Me</button>

            </div>
            {/*right side */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 90 }}
                    whileInView={{ rotate: 1 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 4, type: "spring" }}



                    className="w-maincircle">
                    <div className="w-seccircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={fiverr} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={Facebook} alt="" />
                    </div>

                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>

            </div>

        </div>
    )
}

export default works