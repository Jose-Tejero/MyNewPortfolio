import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Profile from './components/Profile';
import Proyect from './components/Proyect';
import Contact from './components/Contact';

function App() {

  const [ color, setColor ] = useState("#efa94a");

  const handleHome = () => {
    setColor("#efa94a");
  }

  const handleProfile = () => {
    setColor("#bdecb6");
  }

  const handleProyect = () => {
    setColor("#5d9b9b");
  }

  const handleContact = () => {
    setColor("#ea899a");
  }

  return (
    <div className="App">
    <div className='indicator' ></div>
      <div className="buttons">
        <button className='home-button' onClick={handleHome} ><ion-icon name="home-sharp"></ion-icon></button>
        <button className='profile-button' onClick={handleProfile} ><ion-icon name="person-sharp"></ion-icon></button>
        <button className='proyect-button' onClick={handleProyect} ><ion-icon name="document-attach-sharp"></ion-icon></button>
        <button className='contact-button' onClick={handleContact} ><ion-icon name="chatbox-sharp"></ion-icon></button>
      </div>
      {
        color === "#efa94a" ? (<Home color={color} />) : (
          color === "#bdecb6" ? (<Profile color={color} />) : (
            color === "#5d9b9b" ? (<Proyect color={color} />) : (<Contact color={color} />)
          )
        )
      }
    </div>
  );
}

export default App;
