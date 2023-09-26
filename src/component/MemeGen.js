import React from 'react'

function MemeGen({meme, handleMemeClick}) {
  return (
    <div>
        <h3>Meme Generator</h3>
        {meme.map((mem) =>{
          return(
            <li key={mem.id}>
        <img  src={mem.image} alt="meme" />
        </li>
         )}
        
        )}
            
          
    
        
    </div>
  )
}

export default MemeGen