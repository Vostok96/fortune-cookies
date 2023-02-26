
import './App.css';
import FortuneCard from './components/FortuneCard';
import Button from './components/Button';
import phrases from './data/phrases.json';
import React, { useState } from 'react'

function App() {
  const [index, setIndex] = useState(0)
  function changeIndex() {
    setIndex(Math.floor(Math.random() * phrases.length));
  }

  return (
    <div className="App">
      <FortuneCard phrasesData={phrases[index]}/>
      <Button onClick={changeIndex}/>
      <iframe src="./src/letters/text_light.html" frameborder="0"></iframe>
    </div>  
      
  )
}
export default App


