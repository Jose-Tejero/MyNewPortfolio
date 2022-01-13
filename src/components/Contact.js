import React from 'react';

const Contact = ({color}) => {

    const styles = {
        background: color,
        transition: "ease all .5s"
    }
    
    return (
        <div className='Card' style={styles} >
            Contact
        </div>
    );
};

export default Contact;