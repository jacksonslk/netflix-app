import React from "react";

import SignUpComponent from "../components/Smart/SignInComponent/SignInComponent";
import HeaderWrapper from "../components/Dumb/Header/HeaderWrapper/HeaderWrapper";
import Logo from "../components/Dumb/Header/Logo/Logo";
import NavBar from "../components/Dumb/Header/NavBar/NavBar";
import FooterComponent from "../components/Dumb/Footer/FooterComponent/FooterComponent";

function SignUpPage(){

    return(
        <>
        <HeaderWrapper>
        <NavBar className='navbar-home'>
            <Logo />
        </NavBar>
        <SignUpComponent />
        </HeaderWrapper>
        <FooterComponent />
        </>
    )
}

export default SignUpPage;