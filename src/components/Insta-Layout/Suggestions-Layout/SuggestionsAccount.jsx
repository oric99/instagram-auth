import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../initializers/firebase';
import { useMediaQuery } from 'react-responsive'
import imgHistory from '../../../assets/imgHistory.jpg';
import imgHistory2 from '../../../assets/imgHistory2.jpg';
import imgHistory3 from '../../../assets/imgHistory3.jpg';
import imgHistory4 from '../../../assets/imgHistory4.jpg';
import imgHistory5 from '../../../assets/imgHistory5.jpg';


const SuggestionAccount = () => {
    const [underlineText1, setUnderlineText1] = useState('none');
    const [underlineText2, setUnderlineText2] = useState('none');
    const [underlineText3, setUnderlineText3] = useState('none');
    const [underlineText4, setUnderlineText4] = useState('none');
    const [underlineText5, setUnderlineText5] = useState('none');

    const isTablet = useMediaQuery({ query: '(min-width: 1000px)' })
    const [user] = useAuthState(auth);
    

    const _stylesLayout = {

        suggestions_container: {
            margin: '0px 0px 30px',
            padding: 0,
            height: 'max-content',
            width: '293px',
            backgroundColor: '#FAFAFA',
            position: 'fixed',
            display:'flex',
            left:'100px + 68%',
            flexFlow:'column',
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
        image2:{
            height:'32px',
            width:'32px',
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
        elementsSuggest:{
            height: '42px',
            width:'293px',
            margin:'8px 16px',
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
        divSuggestionsText:{
            margin:'12px 0px 0px 0px',
            display: 'flex',
            width:'100%',
            justifyContent:'space-between',
        },
        divSuggestions:{
            height: '56px',
            width:'293px',
            justifyContent:'center',
            alignItems:'center',
            display:'flex',
        },
        textStyle1:{
            margin: 0,
            display: 'flex',
            fontWeight: 650,
            cursor:'pointer',
            fontSize:'15px',
            color:'#262626',
        },
        textStyle2:{
            margin:0,
            display: 'flex',
            fontSize:'13px', 
            color:'#9c9c9c',
            cursor:'text',
        },
       
        decorationHover1:{
            margin: 0,
            display: 'flex',
            cursor:'pointer',
            fontSize:'13px',
            color:'#262626',
            fontWeight: 600,
            textDecoration: `${underlineText1}`,
        },
        decorationHover2:{
            margin: 0,
            display: 'flex',
            cursor:'pointer',
            fontSize:'13px',
            color:'#262626',
            fontWeight: 600,
            textDecoration: `${underlineText2}`,
        },
        decorationHover3:{
            margin: 0,
            display: 'flex',
            cursor:'pointer',
            fontSize:'13px',
            color:'#262626',
            fontWeight: 600,
            textDecoration: `${underlineText3}`,
        },
        decorationHover4:{
            margin: 0,
            display: 'flex',
            cursor:'pointer',
            fontSize:'13px',
            color:'#262626',
            fontWeight: 600,
            textDecoration: `${underlineText4}`,
        },
        decorationHover5:{
            margin: 0,
            display: 'flex',
            cursor:'pointer',
            fontSize:'13px',
            color:'#262626',
            fontWeight: 600,
            textDecoration: `${underlineText5}`,
        },
        textStyle4:{
            margin:0,
            color:'#9C9C9C',
            fontSize: '13px',
            display: 'flex',
        },
        peso:{
            fontWeight: 600,
        },
        textStyle5:{
            color:'#25a4f6',
            fontSize:'13px',
            margin:0,
            fontWeight: 500,
            cursor:'pointer',
            display: 'flex',
        },

        textStyle6:{
            margin: 0,
            marginRight:'5px',
            display: 'flex',
            fontSize:'11px', 
            color:'#c7c7c7',
            whiteSpace:'nowrap',
            cursor:'pointer',
        },
        contentFooter:{
            display:'flex',
            margin:'0px 0px 3px',
            justifyContent:'flex-start',
            alignItems:'flex-start',
        },
        contentMaxFooter:{
            margin:'20px 0px',
            justifyContent:'flex-start',
            alignItems:'flex-start',
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
                <div style ={_stylesLayout.divSuggestionsText}>
                    <div style ={_stylesLayout.textStyle4,_stylesLayout.peso}>Sugerencias para ti</div>
                    <div style ={_stylesLayout.textStyle1}>ver todo</div>
                </div>
                <div >
                    <div style ={_stylesLayout.elementsSuggest}>
                        <img style={_stylesLayout.image2} src={imgHistory} alt=""/>
                        <div style={_stylesLayout.divTextStyle1}>
                            <p style={_stylesLayout.decorationHover1} 
                            onMouseEnter={() => setUnderlineText1('underline')}
                            onMouseOut={() => setUnderlineText1('none')}
                            >Amourath</p>
                            <p style={_stylesLayout.textStyle2}>Nuevo en Instagram</p>
                        </div>
                        <p style={_stylesLayout.textStyle5}>
                            seguir
                        </p>
                    </div>
                    <div style ={_stylesLayout.elementsSuggest}>
                        <img style={_stylesLayout.image2} src={imgHistory4} alt=""/>
                        <div style={_stylesLayout.divTextStyle1}>
                            <p style={_stylesLayout.decorationHover2} 
                            onMouseEnter={() => setUnderlineText2('underline')}
                            onMouseOut={() => setUnderlineText2('none')}
                            >Ochocho</p>
                            <p style={_stylesLayout.textStyle2}>Sugerencias para ti</p>
                        </div>
                        <p style={_stylesLayout.textStyle5}>
                            seguir
                        </p>
                    </div>
                    <div style ={_stylesLayout.elementsSuggest}>
                        <img style={_stylesLayout.image2} src={imgHistory5} alt=""/>
                        <div style={_stylesLayout.divTextStyle1}>
                            <p style={_stylesLayout.decorationHover3} 
                            onMouseEnter={() => setUnderlineText3('underline')}
                            onMouseOut={() => setUnderlineText3('none')}
                            >Mauron playas</p>
                            <p style={_stylesLayout.textStyle2}>Segui a este ome</p>
                        </div>
                        <p style={_stylesLayout.textStyle5}>
                            seguir
                        </p>
                    </div>
                    <div style ={_stylesLayout.elementsSuggest}>
                        <img style={_stylesLayout.image2} src={imgHistory2} alt=""/>
                        <div style={_stylesLayout.divTextStyle1}>
                            <p style={_stylesLayout.decorationHover4} 
                            onMouseEnter={() => setUnderlineText4('underline')}
                            onMouseOut={() => setUnderlineText4('none')}
                            >Esteban Quito</p>
                            <p style={_stylesLayout.textStyle2}>te sigue</p>
                        </div>
                        <p style={_stylesLayout.textStyle5}>
                            seguir
                        </p>
                    </div>
                    <div style ={_stylesLayout.elementsSuggest}>
                        <img style={_stylesLayout.image2} src={imgHistory3} alt=""/>
                        <div style={_stylesLayout.divTextStyle1}>
                            <p style={_stylesLayout.decorationHover5} 
                            onMouseEnter={() => setUnderlineText5('underline')}
                            onMouseOut={() => setUnderlineText5('none')}
                            >Pimenton_ :D</p>
                            <p style={_stylesLayout.textStyle2}>daniielaom sigue a este usuario</p>
                        </div>
                        <p style={_stylesLayout.textStyle5}>
                            seguir
                        </p>
                    </div>
                </div>

                <div style = {_stylesLayout.contentMaxFooter}>
                    <div style={_stylesLayout.contentFooter}>
                        <p style={_stylesLayout.textStyle6}> Información </p>
                        <p style={_stylesLayout.textStyle6}> Ayuda </p>
                        <p style={_stylesLayout.textStyle6}> API </p>
                        <p style={_stylesLayout.textStyle6}> Empleo </p>
                        <p style={_stylesLayout.textStyle6}> Privacidad </p>
                    </div>
                    <div style={_stylesLayout.contentFooter}>    
                        <p style={_stylesLayout.textStyle6}> Condiciones </p>
                        <p style={_stylesLayout.textStyle6}> Ubicaciones</p>
                        <p style={_stylesLayout.textStyle6}> Cuentas destacadas</p>
                        <p style={_stylesLayout.textStyle6}> Hashtags</p>
                        
                    </div>
                    <div style={_stylesLayout.contentFooter}>
                        <p style={_stylesLayout.textStyle6}> Idioma</p>
                    </div>
                    <div style = {_stylesLayout.contentMaxFooter}>
                    <p style={_stylesLayout.textStyle6}>© 2021 INSTAGRAM FROM META</p>
                </div>
                </div>
                
            </div>
            }
            
        </div>
        
    );

};
export default SuggestionAccount;