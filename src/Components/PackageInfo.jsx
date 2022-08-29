import React from "react"
import PackageText from "../Components/PackageText"
import PackageButton from "../Components/PackageButton"

function PackageInfo({name, price, description, radioInput, left}){ 
    return(
        <div>
            <div className="package-info">
                <PackageText 
                    name={name}
                    price={price}
                    description={description}
                    radioInput={radioInput}
                />

                <PackageButton
                    left={left}
                />
            </div>
        </div>
    )
}

export default PackageInfo;