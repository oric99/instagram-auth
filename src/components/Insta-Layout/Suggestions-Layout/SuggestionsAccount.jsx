import React, { Component, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../initializers/firebase';
import { useMediaQuery } from 'react-responsive'


const SuggestionAccount = () => {
    const [underlineText, setUnderlineText] = useState('none');
    const isTablet = useMediaQuery({ query: '(min-width: 1000px)' })
    const [user] = useAuthState(auth);

    const _stylesLayout = {

        suggestions_container: {
            margin: '0px 0px 30px',
            padding: 0,
            height: '600px',
            border: 'solid',
            borderWidth: '0.5px',
            borderHeight: '0.5px',
            borderColor: '#dbdbdb',
            width: '293px',
            backgroundColor: '#FFFFFF',
            position: 'fixed',
            display:'flex',
            left:'68%',
            justifyContent:'center',
            alignItems:'center',
            zIndex: 10,
        },
        image:{
            height:'56px',
            width:'56px',
            display:'flex',
            borderRadius:'50%',
            cursor:'pointer',
        },
        elementsProfile:{
            height: '56px',
            width:'293px',
            justifyContent:'center',
            alignItems:'center',
            display:'flex',
        },
        divTextStyle1:{
            margin: '0px 10px',
            height: 'max-content',
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
        },
        divTextStyle2:{
             margin: 0,
            height: 'max-content',
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
        },
        divSuggestions:{
            justifyContent:'space-between',
            alignItems:'center',
            margin:0,
            display: 'flex',
        },  
        textStyle1:{
            margin: 0,
            fontWeight: 700,
            cursor:'pointer',
            fontSize:'15px',
            color:'#262626',
        },
        textStyle2:{
            margin:0,
            fontSize:'13px', 
            color:'#9c9c9c',
            cursor:'text',
        },
        textStyle3:{
            margin: 0,
            cursor:'pointer',
            fontSize:'15px',
            color:'#262626',
            textDecoration: `${underlineText}`,
        },
        textStyle4:{
            margin:0,
            color:'#9b9b9b',
            fontSize: '14px',
        },
        textStyle5:{
            color:'#25a4f6',
            fontSize:'15px',
            margin:0,
        },
    };
    return (
        <div>
            {isTablet && 
            <div style ={_stylesLayout.suggestions_container}>
                
                <div style ={_stylesLayout.elementsProfile}>
                    <img style={_stylesLayout.image} src={auth.currentUser.photoURL} alt=""/>
                    <div style={_stylesLayout.divTextStyle1}>
                        <p style={_stylesLayout.textStyle1}>{auth.currentUser.displayName}</p>
                        <p style={_stylesLayout.textStyle2}>Ciro M Ortíz</p>
                    </div>
                    <p style={_stylesLayout.textStyle5}>
                        cambiar
                    </p>
                </div>
                <div style ={_stylesLayout.divSuggestions}>
                    
                </div>
                
            </div>
            }
            
        </div>
        
    );

};
export default SuggestionAccount;