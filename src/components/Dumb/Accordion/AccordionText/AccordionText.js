import React from "react";
import "./AccordionText.css"

function AccordionText({ children, isOpen, ...restProps}){

    // const isOpen = true;

    return (

        isOpen ? <div className="accordion-text" {...restProps}>
            {children}
        </div> : null

    )
}

export default AccordionText;