import React, { useState } from 'react';
import imgHistory2 from '../../../assets/imgHistory2.jpg';
import iconCommit from '../../../assets/commit.png';
import iconLike from '../../../assets/like.png';
import iconEmoji from '../../../assets/smile.png';
import iconSend from '../../../assets/send.png';
import iconSave from '../../../assets/save.png';
import iconMenu from '../../../assets/menu.svg';
import postImage from '../../../assets/cheems.jpg';

const Post = () => {
    
    const [underlineText1, setUnderlineText1] = useState('none');
    const [underlineText2, setUnderlineText2] = useState('none');
    const [opacity, setOpacity] = useState('1');
    const [opacity1, setOpacity1] = useState('1');
    const [opacity2, setOpacity2] = useState('1');
    const [opacity3, setOpacity3] = useState('1');

    const _stylesLayout = {
        container: {
            padding: 0,
            margin: '0 -1px 24px',
            width: '616px',
            height: 'max-content',
            border: 'solid',
            borderWidth: '0.5px',
            borderHeight: '0.5px',
            borderColor: '#dbdbdb',
            justifyContent:'space-between',
            backgroundColor: 'white',
            position: 'relative',
            display: 'flex',
            flexFlow:'column',
        },
        imgPost:{
            display: 'flex',
            cursor:'zoom-in'
            
        },
        headerPost:{
            display:'flex',
            margin: 0,
            padding: '14px 16px',
            justifyContent: 'space-between',
            alignItems:'center',
        },
        profileDiv:{
            display:'flex',
            margin: 0,
            padding: 0,
            justifyContent: 'space-between',
            alignItems:'center',
        },
        iconMenuStyle:{
            margin: 0,
            height: '18x',
            width: '18px',
            display: 'flex',
            cursor: 'pointer',
            opacity: '80%',
        },
        emojiIcon:{
            margin:'8px',
            padding:0,
            height: '24px',
            width: '24px',
            display: 'flex',
            cursor: 'pointer',
        },
        hoverIcon:{
            margin:'8px',
            padding:0,
            height: '24px',
            width: '24px',
            display: 'flex',
            cursor: 'pointer',
            opacity: `${opacity}`,
        },
        hoverIcon1:{
            margin:'8px',
            padding:0,
            height: '24px',
            width: '24px',
            display: 'flex',
            cursor: 'pointer',
            opacity: `${opacity1}`,
        },
        hoverIcon2:{
            margin:'8px',
            padding:0,
            height: '24px',
            width: '24px',
            display: 'flex',
            cursor: 'pointer',
            opacity: `${opacity2}`,
        },
        hoverIcon3:{
            margin:'8px',
            padding:0,
            height: '24px',
            width: '24px',
            display: 'flex',
            cursor: 'pointer',
            opacity: `${opacity3}`,
        },
        imageProfile:{
            height:'32px',
            width:'32px',
            display:'flex',
            margin: '0 3px',
            borderRadius:'50%',
            cursor:'pointer',
        },
        divtextProfile:{
            marginLeft:'4px',
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
        textSec:{
            margin: 0,
            display: 'flex',
            cursor:'pointer',
            fontSize:'12px',
            color:'#dbdbdb',
        },
        textSec1:{
            margin: 0,
            display: 'flex',
            cursor:'pointer',
            fontSize:'12px',
            color:'Black',
        },
        textSec2:{
            margin: 0,
            display: 'flex',
            cursor:'pointer',
            fontSize:'13px',
            color:'Black',
        },
        footerIcons:{
            display:'flex',
            justifyContent:'space-between',
        },
        footerdiv:{
            border: 'solid',
            borderWidth: '0.5px',
            borderHeight: '0.5px',
            borderColor: '#dbdbdb',
            display:'flex',
            paddingRight:'5px',
        },
        inputStyle:{
            display:'flex',
            width:'100%',
            height: '40px',
            border: 'none',
            margin: 0,
        },
        divfoter:{
            display:'flex',
            
        }

        
    };
    return (
        <div style={_stylesLayout.container}>
            <div style= {_stylesLayout.headerPost}>
                <div style= {_stylesLayout.profileDiv}>
                    <img style= {_stylesLayout.imageProfile} src={imgHistory2} alt="profileImg"/>
                    <div style={_stylesLayout.divtextProfile}>
                        <p style={_stylesLayout.decorationHover1} 
                        onMouseEnter={() => setUnderlineText1('underline')}
                        onMouseOut={() => setUnderlineText1('none')}>Cheemsito</p>
                        <p style={_stylesLayout.textSec1}>Santiago de Cali</p>
                    </div>
                </div>
                <img style={_stylesLayout.iconMenuStyle} src={iconMenu} alt="optionsicon"/>
            </div>
            <img style = {_stylesLayout.imgPost} src={postImage} alt="postImagen"/>
            <div style ={_stylesLayout.footerIcons}>
                <div style ={_stylesLayout.footerIcons}>
                <img style = {_stylesLayout.hoverIcon} src={iconLike} alt="like" 
                onMouseEnter={() => setOpacity('60%')}
                onMouseOut={() => setOpacity('1')}/>
                <img style = { _stylesLayout.hoverIcon1} src={iconCommit} alt="comment" 
                onMouseEnter={() => setOpacity1('60%')}
                onMouseOut={() => setOpacity1('1')}/>
                <img style = {_stylesLayout.hoverIcon2} src={iconSend} alt="send" 
                onMouseEnter={() => setOpacity2('60%')}
                onMouseOut={() => setOpacity2('1')}/>
                </div>
                <img style = {_stylesLayout.hoverIcon3} src={iconSave} alt="save" 
                onMouseEnter={() => setOpacity3('60%')}
                onMouseOut={() => setOpacity3('1')}/>
            </div>
            <div>
                <div>
                    <p style={_stylesLayout.decorationHover1}> 1000k de me gustas</p>
                    <div style= {_stylesLayout.divfoter}>
                        <p style={_stylesLayout.decorationHover2} 
                        onMouseEnter={() => setUnderlineText2('underline')}
                        onMouseOut={() => setUnderlineText2('none')}>Cheemsito</p><p style={_stylesLayout.textSec1}> bla bla bla</p>
                    </div>
                    <p style={_stylesLayout.textSec}>ver los 131 comentarios</p>
                    <p style={_stylesLayout.textSec}>HACE UN DÍA</p>
                </div>
                
                    <div style ={_stylesLayout.footerIcons}>
                        <img style ={_stylesLayout.emojiIcon} src={iconEmoji} alt=""/>
                        <input style ={_stylesLayout.inputStyle} placeholder="añade un comentario" type="" name="comentar"/>
                        <div>
                            Publicar
                        </div>
                    </div>
                
            </div>
            
            
        </div>
        
        
    );
};
export default Post;