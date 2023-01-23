import React from 'react'
import "./Row.css"


function Row({title,fetchUrl,isLargeRow}) {
  return (
    <div className='row'>
        
        <h1>{title}</h1>
    </div>
   
  )
}

export default Row