import React, { Component, useState } from 'react';
import imgHistory from '../../../assets/imgHistory.jpg';

const Story = () => {

    const _stylesLayout = {
        container: {
            padding: '0px 4px',
            width: '80px',
            height: '122px',
            alignItems:'center',
            position: 'flex',
            display: 'flex',
            flexFlow: 'column',
            
        },
        containerImg:{
            height:'66px',
            width:'66px',
            display:'flex',
            borderRadius:'50%',
            border: 'solid',
            justifyContent:'center',
            alignItems:'center',
            borderColor:'#c62e90',
        },
        img:{
            height:'56px',
            width:'56px',
            display:'flex',
            borderRadius:'50%',
            cursor: 'pointer',
        },
        fontUser:{
            fontSize:'12px',
            color:'black',
            textOverflow:'ellipsis',
            overFlow:'hidden',
            whiteSpace: 'nowrap',
            cursor:'pointer',
            textDecoration: 'none',
            display:'flex',
        }
        
    };
    return (
        <div style={_stylesLayout.container}>
            <div style={_stylesLayout.containerImg}>
                <img style = {_stylesLayout.img} src={imgHistory} alt="aaaa"/>
            </div>
            <div style ={_stylesLayout.fontUser}>
                Paleta Cósmi...
            </div>
        </div>
        
        
    );
};
export default Story;