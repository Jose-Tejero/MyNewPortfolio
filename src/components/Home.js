import React from 'react';

const Home = ({color}) => {

    const styles = {
        background: color
    }

    return (
        <div className='Card' style={styles} >
            Home
        </div>
    );
};

export default Home;