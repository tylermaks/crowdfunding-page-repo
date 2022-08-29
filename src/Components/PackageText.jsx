import React from "react"

import "../Assets/Styles/PackageComponents/PackageComponents.css"

function PackageText({name, price, description, radioInput}){
    return(
        <div>
            <div>
                <div className={radioInput}>
                    <input type="radio" name="modal-radio"/>
                </div>
                <article className="package-inner">
                    <h3>{name}</h3>
                    <h3 className="cyan-text ">{"Pledge " + price + " or more"}</h3>
                </article>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default PackageText;