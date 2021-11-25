import React, { Component, useState } from 'react';
import Story from './Story';
import arrowL from '../../../assets/arrowL.svg';
import arrowR from '../../../assets/arrowR.svg';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const SliderStories = () => {

    const _stylesLayout = {
        container: {
            padding: '16px 0px',
            margin: '0px 0px 24px',
            width: '614px',
            height: '118px',
            border: 'solid',
            borderWidth: '0.5px',
            borderHeight: '0.5px',
            borderColor: '#dbdbdb',
            justifyContent:'space-between',
            backgroundColor: 'white',
            position: 'relative',
            overFlow:'hidden',
            display: 'flex',
            flexGrow: 'nowrap',
        },
        arrowContent:{
            margin: 0,
            display:'flex',
            opacity:'30%',
            cursor: 'pointer',        
        },
        
    };
    return (
        <div style={_stylesLayout.container}>
            <div style={_stylesLayout.arrowContent}>
            <img src={arrowL} alt=""/>
            </div>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
            
            <div style={_stylesLayout.arrowContent}>
            <img src={arrowR} alt=""/>
            </div>
        </div>
        
        
    );
};
export default SliderStories;