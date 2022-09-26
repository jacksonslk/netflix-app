import React from "react";
import SubscribeButton from "../Dumb/Forms/Subscribe/SubscribeButton/SubscribeButton";
import SubscribeEmail from "../Dumb/Forms/Subscribe/SubscribeEmail/SubscribeEmail";
import SubscribeWrapper from "../Dumb/Forms/Subscribe/SubscribeWrapper/SubscribeWrapper";
import FeatureTitle from "../Dumb/Header/FeatureTitle/FeatureTitle";
import FeatureWrapper from "../Dumb/Header/FeatureWrapper/FeatureWrapper";
import HeaderWrapper from "../Dumb/Header/HeaderWrapper/HeaderWrapper";
import Logo from "../Dumb/Header/Logo/Logo";
import NavBar from "../Dumb/Header/NavBar/NavBar";
import SignInButton from "../Dumb/Header/SignInButton/SignInButton";
import Separator from "../Dumb/separator/Separator"

function HeaderComponent(){

return(
    <>
    <HeaderWrapper>
        <NavBar className='navbar-home'>
            <Logo />
            <SignInButton />
        </NavBar>
        <FeatureWrapper className='feature-wrapper-home'>
            <FeatureTitle className='feature-title-home'>
                Unlimited movies, TV shows and more.
            </FeatureTitle>
        </FeatureWrapper>
        <SubscribeWrapper>
            <SubscribeEmail type='email' />

            <SubscribeButton> Get Started </SubscribeButton>
        </SubscribeWrapper>
    </HeaderWrapper>
    <Separator />
    </>
    )

}

export default HeaderComponent;