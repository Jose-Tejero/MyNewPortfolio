import React from 'react';

const Profile = ({color}) => {

    const styles = {
        background: color
    }
    
    return (
        <div className='Card' style={styles} >
            Profile
        </div>
    );
};

export default Profile;