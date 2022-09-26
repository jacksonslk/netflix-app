import React from "react";
import './SubscribeButton.css'


function SubscribeButton({children, ...restProps}){

    return(
        <div className="subscribe-button">
            <a href="./signup" {...restProps}>
                { children }
            <img 
                className="subscribe-button-image"
                    src="../../../../../Images/Icons/Right-arrow Icon.png"
                        alt="Try Now"
                />
            </a>
        </div>
    )
}
export default SubscribeButton;