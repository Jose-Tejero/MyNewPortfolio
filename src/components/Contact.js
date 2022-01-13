import React from 'react';

const Contact = ({color}) => {

    const styles = {
        background: color,
        transition: "ease all .5s"
    }
    
    return (
        <div className='contact-card' style={styles} >
            <h2>Contacto</h2>
        </div>
    );
};

export default Contact;