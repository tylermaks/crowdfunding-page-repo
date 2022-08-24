import React from "react"

import "../Assets/Styles/About/About.css"
import {aboutData} from "../componentData"

function About(){
    return(
        <section id="about" className="product-info-inner">
            <h2>About this project</h2>
            <p>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates
                your screen to a more comfortable viewing height.Placing your monitor at eye level 
                has the potential to improve your posture and make you more comfortable while at work,
                helping you stay focused on the task at hand.
            </p>
            <p>
                Featuring artisan craftmanship, the simplicity of design creates extra desk space below
                below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
            <div>
                {
                    aboutData.map(item => {

                        const outOfStock = item.left === 0 ? "out-of-stock" : ""

                        return(
                            <div className="package-container">
                                <h3>{item.name}</h3>
                                <h3 className="h3-alt">{"Pledge" + item.price + " or more"}</h3>
                                <p>{item.description}</p>
                                <h1>{item.left}</h1>
                                <span>left</span>
                                <button className={outOfStock}>Select Reward</button>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default About;