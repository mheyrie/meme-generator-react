import React from 'react'

function MemeGen({meme}) {
  return (
    <div>
        <h3>Meme Generator</h3>
        
            <img src={meme.image} alt="meme" />
          
    
        
    </div>
  )
}

export default MemeGen