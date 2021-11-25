import React, { Component, useState } from 'react';
import SearchBar from './Header-Buttons/SearchBar';
import IconsHeader from './Header-Buttons/IconsHeader';
import InstaLogo from './../../assets/instagramletra.png';


//contenedore principal de los items del header
const HeaderLayout = () => {

//
    const _stylesLayout = {
        header_Container: {
            margin: 0,
            padding: 0,
            top:0,
            height: '54px',
            border: 'solid',
            borderWidth: '0.5px',
            borderHeight: '0.5px',
            borderColor: '#dbdbdb',
            width: '100%',
            backgroundColor: 'white',
            justifyContent:'center',
            alignItems: 'center',
            position: 'fixed',
            display: 'flex',
            zIndex:1,
        },
        sub_container:{
            display:'flex',
            width:'90%',
            height:'100%',
            justifyContent:'space-between',
            alignItems:'center',
        },
        font_insta: {
            height: '29px',
            width: '103px',
            display: 'flex',
            margin: 0,
            padding: 0,
            cursor: 'pointer',
        },
    };
    return (
        <div style={_stylesLayout.header_Container}>
            <div style={_stylesLayout.sub_container}>
                <div>
                    <img style={_stylesLayout.font_insta} src={InstaLogo} alt="INSTAGRAM"/>
                </div>
                <SearchBar/>
                <IconsHeader/>
            </div>
        </div> 
    );
};
export default HeaderLayout;