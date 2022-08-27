import React from "react"
import PackageInfo from "./PackageInfo"

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

            {
                aboutData.slice(1).map(item => {
                    return(
                        <PackageInfo
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            left={item.left}
                            radioInput="hidden"
                        />
                    )
                })
            }
        
        </section>
    )
}

export default About;