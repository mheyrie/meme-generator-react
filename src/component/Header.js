import React from 'react'

function Header({handleMemeClick}) {
  return (
    <div className="header">
        <h2>Random Meme Generator</h2>
        <button onClick={handleMemeClick}>next meme</button>
    </div>
  )
}

export default Header