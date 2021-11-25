import React, { Component, useState } from 'react';
import SuggestionAccount  from './Suggestions-Layout/SuggestionsAccount';
import InstaPublics from './Insta-publics/InstaPublics';
import { useMediaQuery } from 'react-responsive';

const InstaLayout = () => {


const isTablet = useMediaQuery({ query: '(max-width: 1000px)' })
const isLaptop = useMediaQuery({query:'(min-width: 1300px)' })
const isUltra = useMediaQuery({ query: '(min-width: 2500px)' })

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
            width:'6%',
            height:'100%',
            display:'flex',
            position:'relative',
        },
        rellenoLaptopL:{
            width:'10%',
            height:'100%',
            display:'flex',
            position:'relative',
        },
        rellenoUltra:{
            width:'25%',
            height:'100%',
            display:'flex',
            position:'relative',
        },
        rellenoTablet:{
            width:'12%',
            height:'100%',
            display:'flex',
            position:'relative',
        },
        
        
    };
    return (
        <div style={_stylesLayout.max_container}>
            {isTablet ?
            <div style ={_stylesLayout.rellenoTablet}>
            </div> : <div style ={_stylesLayout.relleno}>
            </div>
            }
            {isLaptop ?
                <div div style ={_stylesLayout.rellenoLaptopL}>
                </div>
                : 
                <div>
                </div>
            }
            {isUltra &&
            <div style ={_stylesLayout.rellenoUltra}>
            </div>
            }
            <InstaPublics/> 
            <SuggestionAccount/>
        </div>
    );
}
export default InstaLayout;