import React from "react"

import "../Assets/Styles/PackageComponents/PackageComponents.css"

function PackageButton({left}){
    return(
        <div class="package-inner">
            <div>
                <h2>{left}</h2>
                <span>left</span>
            </div>
            <button>Select Reward</button>
        </div>
    )
}

export default PackageButton;