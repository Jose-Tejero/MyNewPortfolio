import React from 'react';

const Contact = ({color}) => {

    const styles = {
        background: color
    }
    
    return (
        <div className='Card' style={styles} >
            Contact
        </div>
    );
};

export default Contact;