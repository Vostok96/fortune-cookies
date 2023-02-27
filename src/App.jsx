
import './App.css';
import FortuneCard from './components/FortuneCard';
import Button from './components/Button';
import phrases from './data/phrases.json';
import React, { useState } from 'react'
// import fondo1 from './assets/fondo1.jpg'
// import fondo2 from './assets/fondo2.jpg'
// import fondo3 from './assets/fondo3.jpg'
// import fondo4 from './assets/fondo4.jpg'
import fondo5 from './assets/fondo5.jpg'
import fondo6 from './assets/fondo6.jpg'
import fondo7 from './assets/fondo7.jpg'
import fondo8 from './assets/fondo8.jpg'
import fondo9 from './assets/fondo9.jpg'

const fondos = [/*fondo1, fondo2, fondo3, fondo4,*/ fondo5, fondo6, fondo7, fondo8, fondo9,]



function App() {
  const [index, setIndex] = useState(0)
  function changeIndex() {
    setIndex(Math.floor(Math.random() * phrases.length));
  }

  const randomFondos = fondos[Math.floor(Math.random() * fondos.length)];

  return (
    <div className="App" style={{ backgroundImage: `url(${randomFondos})` }}>
      <FortuneCard phrasesData={phrases[index]}/>
      <Button onClick={changeIndex}/>
      
    </div>  
      
  )
}
export default App


