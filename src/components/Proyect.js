import React from 'react';

const Proyect = ({color}) => {

    const styles = {
        background: color
    }
    
    return (
        <div className='Card' style={styles} >
            Proyect
        </div>
    );
};

export default Proyect;