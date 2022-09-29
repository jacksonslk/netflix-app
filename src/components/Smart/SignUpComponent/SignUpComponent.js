import React from "react";
import SignCaptcha from "../../Dumb/SignCaptcha/SignCaptcha";
import SignInput from "../../Dumb/SignInput/SignInput";
import SignLink from "../../Dumb/SignLink/SignLink";
import SignText from "../../Dumb/SignText/SignText";
import SignTitle from "../../Dumb/SignTitle/SignTitle";
import SignButton from "../../SignButton/SignButton";

import './SignUpComponent.css'

function SignUpComponent({ children, ...restProps }){

    return(
        <div className="sign-form-wrapper" {...restProps}>
            <form className="sign-form-base">
                <SignTitle> Sign Up </SignTitle>
                <SignInput 
                type="text"
                placeholder="Full Name"
                />
                <SignInput 
                type="text"
                placeholder="Email Address"
                />
                <SignInput 
                type="password"
                placeholder="Password"
                autocomplete="off"
                />
                <SignButton> Sign In </SignButton>
                <SignText> Already a User? <SignLink> Sign-In Now </SignLink></SignText>
                <SignCaptcha> This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more. </SignCaptcha>
            </form>
        </div>
    )

}
export default SignUpComponent