import React, { Component, useState } from 'react';
import HeaderLayout from '../Header-Layout/InstagramHeader';
import SuggestionAccount  from './Suggestions-Layout/SuggestionsAccount';
import InstaPublics from './Insta-publics/InstaPublics';
import { useMediaQuery } from 'react-responsive';

const InstaLayout = () => {


const isTablet = useMediaQuery({ query: '(min-width: 1000px)' })

    const _stylesLayout = {
        max_container: {
            padding: '30px 0px 0px',
            margin:'0px 81.5px',
            top: '54px',
            width: '100%',
            height: '400%',
            backgroundColor: '#fafafa',
            position: 'absolute',
            zIndex: -2,
            justifyContent:'flex-start',
            display: 'flex',
        },
        relleno:{
            width:'5%',
            height:'100%',
            display:'flex',
            position:'relative',
        },
        layoutQuery:{
            padding: '30px 0px 0px',
            margin:'0px 81.5px',
            top: '54px',
            width: '100%',
            height: '400%',
            backgroundColor: '#fafafa',
            position: 'absolute',
            zIndex: -2,
            justifyContent:'center',
            display: 'flex',
        },
        
        
    };
    return (
        <div style={_stylesLayout.max_container}>
            <div style ={_stylesLayout.relleno}>
            </div>
            <InstaPublics/> 
            <SuggestionAccount/>
        </div>
        
        
        
        
        
    );
}
export default InstaLayout;