import React from 'react';

const Profile = ({color}) => {

    const styles = {
        background: color,
        transition: "ease all .5s"
    }

    return (
        <div className='Card' style={styles} >
            Profile
        </div>
    );
};

export default Profile;