import React from 'react';

const Proyect = ({color}) => {

    const styles = {
        background: color,
        transition: "ease all .5s"
    }
    
    return (
        <div className='Card' style={styles} >
            Proyect
        </div>
    );
};

export default Proyect;