import React from "react";
import HeaderComponent from "../components/Smart/HeaderComponent";
import Separator from "../components/Dumb/separator/Separator";
import JumboComponent from "../components/Dumb/Jumbo/JumboComponent/JumboComponent";
import AccordionComponent from "../components/Dumb/Accordion/AccordionComponent/AccordionComponent";
import FooterComponent from "../components/Dumb/Footer/FooterComponent/FooterComponent";

function HomePage(){

   return(
    <>
    <HeaderComponent />
    <Separator />
    <JumboComponent/>
    <AccordionComponent />
    <Separator />
    <FooterComponent />
    </>
   )

}

export default HomePage;