import React from "react";
import JumboImage from "../JumboImage/JumboImage";
import JumboSubheading from "../JumboSubheading/JumboSubheading";
import JumboTitle from "../JumboTitle/JumboTitle";
import './JumboItem.css'

function JumboItem({children, alignment, title, subheading, imagesrc, imagealt, ...restProps}){

    return(
        <div className="jumbo-item">
            {
                alignment === true &&(
            <div>
                 <JumboTitle  className="jumbo-div1"> {title} </JumboTitle>
                 <JumboSubheading> {subheading} </JumboSubheading>
             </div>
                )
            }
             {
                alignment === false &&(

                    <JumboImage className="jumbo-div2" src={imagesrc} alt={imagealt}></JumboImage>

                )
            }
                    {
                alignment === true &&(
            <div>
                 
                 <JumboImage className="jumbo-div2" src={imagesrc} alt={imagealt}></JumboImage>

             </div>
                )
            }
             {
                alignment === false &&(
                    <div>
                    <JumboTitle  className="jumbo-div1"> {title} </JumboTitle>
                 <JumboSubheading> {subheading} </JumboSubheading>
                 </div>
                )
            }
        </div>
    )
}

export default JumboItem;