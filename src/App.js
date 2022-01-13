import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Profile from './components/Profile';
import Proyect from './components/Proyect';
import Contact from './components/Contact';

function App() {

  const [ color, setColor ] = useState("#efa94a");
  const [ indicatorPos, setIndicatorPos ] = useState("48px");

  const handleHome = () => {
    setColor("#efa94a");
    setIndicatorPos("48px");
  }

  const handleProfile = () => {
    setColor("#bdecb6");
    setIndicatorPos("136px");
  }

  const handleProyect = () => {
    setColor("#5d9b9b");
    setIndicatorPos("224px");
  }

  const handleContact = () => {
    setColor("#ea899a");
    setIndicatorPos("312px");
  }

  const indicatorStyles = {
    position: "absolute",
    width: "40px",
    height: "40px",
    left: "20px",
    top: indicatorPos,
    borderRadius: "50%",
    background: color,
    boxShadow: `0 0 10px 10px ${color}`,
    transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s"
  }

  const backgroundStyles = {
    background: color,
    transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s"
  };

  return (
    <div className="App">
      <div className='indicator' style={indicatorStyles}></div>
      <div className="buttons">
        <button className='home-button' onClick={handleHome} ><ion-icon name="home-sharp"></ion-icon></button>
        <button className='profile-button' onClick={handleProfile} ><ion-icon name="person-sharp"></ion-icon></button>
        <button className='proyect-button' onClick={handleProyect} ><ion-icon name="document-attach-sharp"></ion-icon></button>
        <button className='contact-button' onClick={handleContact} ><ion-icon name="chatbox-sharp"></ion-icon></button>
      </div>
      {
        color === "#efa94a" ? (<div className='Card' style={backgroundStyles} ><Home /></div>) : (
          color === "#bdecb6" ? (<div className='Card' style={backgroundStyles} ><Profile /></div>) : (
            color === "#5d9b9b" ? (<div className='Card' style={backgroundStyles} ><Proyect /></div>) : (<div className='Card' style={backgroundStyles} ><Contact /></div>)
          )
        )
      }
    </div>
  );
}

export default App;
