import React from 'react'

function MemeGen({meme}) {
  console.log(meme)
  return (
    <div>
        <h3>Meme Generator</h3>
        {meme === undefined ? null : <img src={meme.image} alt='no pic'/>}
    </div>
  )
}

export default MemeGen