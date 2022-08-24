import React from "react"

function PackageInfo({name, price, description, left, outOfStock}){ 
    return(
        <div className={"package-container " + outOfStock}>
            <div className="row-package">
                <h3 className="title">{name}</h3>
                <h3 className="h3-alt">{"Pledge" + price + " or more"}</h3>
            </div>
            
            <p>{description}</p>
            <div className="row-package">
                <div>
                    <h1>{left}</h1>
                    <span>left</span>
                </div>
                <button>Select Reward</button>
            </div>
        </div>
    )
}

export default PackageInfo;