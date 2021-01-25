import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, hexColor, index }) => {
 const [alert, setAlert] = useState(false);
 const bcg = rgb.join(',');

 useEffect(()=>{
     const time = setTimeout(() => {
         setAlert(false);
     }, 3000);
     return ()=>clearTimeout(time);
 },[alert])

 return (
  <article 
  className={`color ${index > 10 && 'color-light'}`}
  style={{ backgroundColor: `rgb(${bcg})` }}
  onClick={()=>{
      setAlert(true);
      navigator.clipboard.writeText(`#${hexColor}`)
  }} >
    <p className='percent-value'>
          {`${weight}%`}
    </p>
    <p className='color-value' >
        {`#${hexColor}`}
    </p>

    {alert && <p className='alert' >coppied to clipboard</p>}
  </article>
 );
}

export default SingleColor
