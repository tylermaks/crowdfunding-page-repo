import React from "react"

function PackageInfo({name, price, description, left, radioInput, modal, id}){ 

    const outOfStock = left === 0 ? "out-of-stock" : "" 
    const modalFlex = modal ? "modal-flex" : ""
    const modalAbs = modal ? "modal-abs" : ""
    const modalHidden = modal ? "hidden" : ""
    const noReward = id === 0 ? "hidden" : ""

    return(
        <div className={"package-info " + outOfStock}>
            <div className="package-inner package-inner--modal">
                <div className={"input-container" + !modalHidden}>
                    <input className={radioInput} type="radio" name="modal-radio"/>
                </div>
                <article className={"package-title " + modalFlex}>
                    <h3>{name}</h3>
                    <h3 className={"cyan-text " + noReward}>{"Pledge " + price + " or more"}</h3>
                </article>
            </div>

            <p>{description}</p>

            <div className={"package-inner " + noReward}>
                <div className={modalAbs}>
                    <h2>{left}</h2>
                    <span>left</span>
                </div>
                <button className={"select-reward " + modalHidden}>Select Reward</button>
            </div>
        </div>
    )
}

export default PackageInfo;