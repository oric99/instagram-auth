import React from 'react';
import Iconlike from '../../../assets/like.png';
import IconMsg from '../../../assets/msg.png';
import IconCreate from '../../../assets/create.png';
import IconHome from '../../../assets/home.png';
import IconBrujula from '../../../assets/brujula.png';
import ButtonProfile from './ButtonProfile';


const Icons = () => {
    // espacio para el style de los componentes
    const _styles = {
        divContainer:{
            display:'flex',
            margin:0,
            padding:'0 0 0 24px',
        },
        img: {
            marginLeft: '24px',
            height: '22px',
            width: '22px',
            display: 'flex',
            cursor: 'pointer',
        },
    };

    return (
        //las cajas que se van a exportar 
        <div style={_styles.divContainer}>        
            <img style={_styles.img} src={IconHome} alt="home"/>
            <img style={_styles.img} src={IconMsg} alt="msg"/>
            <img style={_styles.img} src={IconCreate} alt="create"/>
            <img style={_styles.img} src={IconBrujula} alt="brujula"/>
            <img style={_styles.img} src={Iconlike} alt="like"/>
            <ButtonProfile/>
        </div>
    );
};
export default Icons;