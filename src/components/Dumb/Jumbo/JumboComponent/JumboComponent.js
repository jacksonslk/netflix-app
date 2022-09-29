import React from "react";
import JumboItem from "../JumboItem/JumboItem";
import Separator from "../../separator/Separator.js"
import "./JumboComponent.css"

function JumboComponent(){

    const data = [
        {
            "title" : "Enjoy on your TV.",
            "subheading" : "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
            "imagesrc" : "Images/Home/Netflix Jumbo 1.jpg"
        },
        {
            "title" : "Download your shows to watch offline.",
            "subheading" : "Save your favourites easily and always have something to watch.",
            "imagesrc" : "Images/Home/Netflix Jumbo 2.jpg"
        },
        {
            "title" : "Watch everywhere.",
            "subheading" : "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            "imagesrc" : "Images/Home/Netflix Jumbo 3.jpg"
        },
        {
            "title" : "Create profiles for children.",
            "subheading" : "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
            "imagesrc" : "Images/Home/Netflix Jumbo 4.jpg"
        }
    ]

    return(
        <div className="jumbo-component">
        { data.map((item,index:Number)=>(
            <>
            <JumboItem alignment={index % 2 === 0} title={item.title} subheading={item.subheading} imagesrc={item.imagesrc} />
            <Separator />
            </>
        ))
    }
    </div>

    )
}

export default JumboComponent;