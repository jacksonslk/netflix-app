import React from "react";
import "./AccordionTitle.css"

function AccordionTitle({ children, isOpen, index, handleClick, ...restProps}){
// const isOpen = true;
    return(
        <div className="accordion-title" {...restProps} onClick={ ()=> handleClick()}>
            { children }

        {
            isOpen === true && (

                <img className="accordion-icon" src="Images/Icons/Close-Icon.png"/>

            )
        }
         {
            isOpen === false && (

                <img className="accordion-icon" src="Images/Icons/Plus-Icon.png"/>
                
            )
        }
        </div>
    )
}

export default AccordionTitle;