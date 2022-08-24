import React from 'react';
import 'Header.css';

function Logo( { imageSrc }){

    return(

        <div>
            <img className='logo' src= {imageSrc} alt='Netflix-Logo' />
        </div>

    )

}

export default Logo;