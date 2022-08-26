import React from "react"

//{name, price, description, left, outOfStock}
import {aboutData} from "../componentData"

function PackageInfo(props){ 
    return(
        <div>
            {
                aboutData.map(item => {

                    const outOfStock = item.left === 0 ? "out-of-stock" : ""

                    return(
                        <div className={"package-container " + outOfStock}>
                        
                            <div className="row-package">
                                {props.radioBtn}
                                <article>
                                    <h3 className="title">{item.name}</h3>
                                    <h3 className="h3-alt">{"Pledge" + item.price + " or more"}</h3>  
                                </article>
                            </div>
                            
                            <p>{item.description}</p>
                            <div className="row-package">
                                <div>
                                    <h1>{item.left}</h1>
                                    <span>left</span>
                                </div>
                                <button>Select Reward</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    
    )
}

export default PackageInfo;