import React from 'react';

const Proyect = ({color}) => {

    const styles = {
        background: color,
        transition: "ease all .5s"
    }
    
    return (
        <div className='proyect-card' style={styles} >
            <h2>Proyectos</h2>
        </div>
    );
};

export default Proyect;