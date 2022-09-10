import React from "react";
import './HeaderWrapper.css';


function HeaderWrapper({ children, ...restProps }){
    return(
    <header className="Header-Wrapper" { ...restProps }>
        { children }
    </header>
    )
}

export default HeaderWrapper;