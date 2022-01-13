import React from 'react';
import quotes from '../images/quotes.png'
import pokemonapi from '../images/pokemonapi.png'
import forecast from '../images/forecast.png'
import rickandmorty from '../images/rickandmorty.png'

const Proyect = ({color}) => {

    const styles = {
        background: color,
        transition: "ease all .5s"
    }
    
    return (
        <div className='proyect-card' style={styles} >
            <div className="proyect-link-top">
                <a className='image-top' href="https://quotes-tejero.netlify.app" target = "_blank" rel="noopener noreferrer">
                    <img src={quotes} alt="" />
                </a>
                <a className='image-bottom' href="https://pokeapi-tejero.netlify.app" target = "_blank" rel="noopener noreferrer">
                    <img src={pokemonapi} alt="" />
                </a>
            </div>
            <h2>Proyectos</h2>
            <div className="proyect-link-bottom">
                <a className='image-top' href="https://forecast-tejero.netlify.app" target = "_blank" rel="noopener noreferrer">
                    <img src={forecast} alt="" />
                </a>
                <a className='image-bottom' href="https://rickandmorty-tejero.netlify.app" target = "_blank" rel="noopener noreferrer">
                    <img src={rickandmorty} alt="" />
                </a>
            </div>
        </div>
    );
};

export default Proyect;