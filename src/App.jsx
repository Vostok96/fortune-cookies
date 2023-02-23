import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Button from './components/Button';
import CardSong from './components/CardSong';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <h1> {100 + 100} </h1>
       <Button
       propiedad="Este es el valor de la propiedad"
       texto="Cancelar"
       />
       <Button texto="Aceptar" 
       />
       <Button texto="Iniciar Sesion"
       />

       <CardSong 
       titulo="Storytime"
       album="Imaginarium"
       banda="Nightwish"
       genero="Metal sinfonico"
       fecha="2011"/>

       <CardSong
       titulo="Blinding Lights"
       album="After Hours"
       banda="The Weeknd"
       genero="R&B"
       fecha="2019" />
    </div>
  )
}
export default App


