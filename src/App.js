import React, { useEffect, useState} from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import MemeGen from './component/MemeGen';

function App() {

   const[meme, setMeme] = useState([])

useEffect(() =>{
      const HandleGetMemes = async () => {
        const response = await fetch ("https://programming-memes-images.p.rapidapi.com/v1/memes",{
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '6b82a7a6d2msh32ced45368a2b09p10660cjsnec1ffed73f49',
            'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
     }})
      const result = await response.json() 
          console.log(result)
          setMeme(result)
        
       
   }     
      HandleGetMemes()
    }, [])



    return (
    <div className="App">
      <Header />
      <MemeGen meme={meme} />
      <Footer />
    </div>
  );
}

export default App;
 
 
