import React, { useEffect, useState} from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import MemeGen from './component/MemeGen';

function App() {

   const[meme, setMeme] = useState([])
   const [reload, setReload] = useState(false)

useEffect(() =>{
      const HandleGetMemes = async () => {
        const response = await fetch ("https://programming-memes-images.p.rapidapi.com/v1/memes",{
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '6b82a7a6d2msh32ced45368a2b09p10660cjsnec1ffed73f49',
            'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
     }})
      const result = await response.json() 
          setMeme(result)
   }     
      HandleGetMemes()
    },[reload])

    function handleMemeClick (event) {
      setReload(() => !reload)
    }

    return (
    <div className="App">
      <Header handleMemeClick={handleMemeClick}/>
      <MemeGen meme={meme[Math.floor(11*Math.random())]}/>
      <Footer />
    </div>
  );
}

export default App;
 
 
