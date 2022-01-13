import React from 'react';
import me from '../images/yoyo.png'
import Pdf from '../document.pdf'

const Home = () => {

    return (
        <div className='home-card' >
            <img src={me} alt="" />
            <h2>Hola, soy <span>José</span> Tejero</h2>
            <p>"El arte es el único lugar, donde se hace lo que se quiera. Eso es libertad."</p>
            <i>- Paula Rego</i>
            <a href = {Pdf} target = "_blank" rel="noreferrer">Descargar CV</a>
        </div>
    );
};

export default Home;