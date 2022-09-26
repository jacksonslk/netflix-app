import React from "react";
import JumboImage from "../JumboImage/JumboImage";
import JumboSubheading from "../JumboSubheading/JumboSubheading";
import JumboTitle from "../JumboTitle/JumboTitle";


function JumboItem({children, title, subheading, imagesrc, imagealt, ...restProps}){

    return(
        <div className="jumbo-item">
            <div>
                <JumboTitle> {title} </JumboTitle>
                <JumboSubheading> {subheading} </JumboSubheading>
            </div>
            <div>
                <JumboImage src={imagesrc} alt={imagealt}></JumboImage>
            </div>
        </div>
       

    )
}

export default JumboItem;