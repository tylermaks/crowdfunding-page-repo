import React from "react"

import "../Assets/Styles/Backers/Backers.css"
import {backerData} from "../componentData";

function Backers(){

    return(
        <section id="backers" className="product-info-inner">
            <div className="row-start">
                {
                    backerData.map(item => {
                        return(
                            <div className="backer-stats">
                                <h1>{item.val}</h1>
                                <span>{item.text}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="progress-container">
                <div className="progress-bar"></div>
            </div>
        </section>
    )
}

export default Backers;