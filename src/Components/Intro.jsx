import React from "react"

import MastercraftLogo from "../Assets/images/logo-mastercraft.svg"
import bookmark from "../Assets/images/icon-bookmark.svg"

import "../Assets/Styles/Intro/Intro.css"

function Intro(){
    return(
        <div id="intro" className="product-info-inner product-info-inner--intro">
            <img className="mastercraft-logo" src={MastercraftLogo} alt="Mastercraft Logo" />
            <h2>Mastercraft Bamboo Monitor Riser</h2>
            <p>A beautifully crafted monitor stand to reduce neck and eye strain</p>
            <div className="row-space-between">
                <button>Back this project</button>
                <div className="bookmark-container">
                    <img className="bookmark" src={bookmark} alt="Bookmark" />
                    <div className="bookmark-container__text">
                        <span>Bookmark</span> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;