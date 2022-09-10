import React from "react";
import './SubscribeButton.css'

function SubscribeButton({children, ...restProps}){

    return(
        <div >
            <a className="subscribe-button" href="./signup" {...restProps}>
                {children}
            </a>
            <img 
            className="subscribe-button-image"
            src=""
            alt="Try Now"
            />
        </div>
    )
}