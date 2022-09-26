import React from "react";
import './Separator.css'

function separator( {children, ...restProps}){

    return(

        <div className="separator"  {...restProps}>
            {children}
        </div>

    );
}

export default separator;