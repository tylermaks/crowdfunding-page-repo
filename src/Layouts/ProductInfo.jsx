import React from "react"
import Intro from "../Components/Intro";
import Backers from "../Components/Backers";
import About from "../Components/About";

import "../Assets/Styles/ProductInfo/ProductInfo.css"

function ProductInfo(){
    return(
        <div id="product-info-container">
            <section id="product-info">
                <Intro />
                <Backers />
                <About />
            </section>
        </div>
    )
}

export default ProductInfo;