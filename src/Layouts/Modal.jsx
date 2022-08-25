import React from "react"
import PackageInfo from "../Components/PackageInfo"
import closeIcon from "../Assets/images/icon-close-modal.svg"

import "../Assets/Styles/Modal/Modal.css"

function Modal(){
    return(
        <div className="modal-background">
            <section className="modal">
                <div className="modal-inner">
                    <h2>Back this project</h2>
                    <img src={closeIcon} alt="Close Modal" />
                </div>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out to the world?</p>
                <PackageInfo />
            </section>
        </div>
    )
}

export default Modal;