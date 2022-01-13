import React from 'react';

const Profile = ({color}) => {

    const styles = {
        background: color,
        transition: "ease all .5s"
    }

    return (
        <div className='profile-card' style={styles} >
            <div className='profile-icons' >
                <ion-icon name="logo-html5"></ion-icon>
                <ion-icon name="logo-css3"></ion-icon>
            </div>
            <p>Desarrollador Front End, Back
            End o Full Stack, buscando el
            camino donde pueda
            crecer...</p>
            <h2>Perfil</h2>
            <p>... ofreciendo
            compromiso, responsabilidad,
            pasión y, sobre todo, humanismo.</p>
            <div className='profile-icons' >
                <ion-icon name="logo-nodejs"></ion-icon>
                <ion-icon name="logo-react"></ion-icon>
            </div>
        </div>
    );
};

export default Profile;