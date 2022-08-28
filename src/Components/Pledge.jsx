import React from "react"

import "../Assets/Styles/Pledge/Pledge.css"

function Pledge(){
    return(
        <form  className="pledge-container">
            <label htmlFor="pledge">Enter your pledge</label>
            <div className="flex-space-between">
                <input type="text" name="pledge" pattern="^\d+$" maxLength="4" />
                <button>Continue</button>
            </div>
        </form>
    )
}

export default Pledge;