import React from 'react';
import { auth, provider } from './firebase';
import imgGoogle from './../assets/google.png';
import img1 from './../assets/img1login.jpg';
import imginsta from './../assets/instagramletra.png';
import FooterLogin from '../components/footer-Login/FooterLogin';
import { useMediaQuery } from 'react-responsive'


const Login = () => {
    // pantalla login
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
    //estilos para los componentes del login

    const _stylesLogin = {
        container: {
            padding: 0,
            paddingTop:'30px',
            width: '100%',
            height: '100%',
            backgroundColor: '#fafafa',
            justifyContent:'center',
            alignItems:'center',
            position: 'relative',
            display: 'flex',
            flexFlow: 'column',
            zIndex: 1,
        },
        sub_container: {
            marginTop: '30px',
            marginBottom: '40px',
            padding: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#fafafa',
            display: 'flex',
            overFlow:'hidden',
            justifyContent: 'center',
            alignItems: 'center',
        },
        divCelulares:{
            width:'454px',
            height:'618px',
            display: 'flex',
            flexGrow:'nowrap',
            justifyContent:'flex-start',
            alignItems:'flex-end',
            margin:'0px -15px 0px -35px', 
            backgroundImage:'url("https://cdn.discordapp.com/attachments/758598672270360597/912838198659522590/celulares.png")',
            },
    
       
        imgLoginCelular:{
            height:'427px',
            width:'240px',
            marginBottom:'92px',
            marginLeft:'150.5px',
            display:'flex',
        },
        container_SignIn: {
            height: '357px',
            width: '350px',
            margin: '0px 0px 10px',
            padding: '10px 0px',
            backgroundColor: 'white',
            border: 'solid',
            borderWidth: '0.5px',
            borderHeight: '0.5px',
            borderColor: '#dbdbdb',
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        font_insta: {
            height: '51px',
            width: '175px',
            display: 'flex',
            margin: '22px 86.5px 12px',
            padding: 0,
        },
        login_btn: {
            margin: '8px 40px',
            padding: 0,
            width: '268px',
            height: '30px',
            cursor: 'pointer',
            backgroundColor: '#0095f6',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            font: 'inherit',
            borderRadius: '8px',
        },
        contentLineas:{
            display:'flex',
            justifyCenter: 'center',
            alignItems: 'center',
            color:'#dbdbdb',
            margin:'10px 40px 18px',
        },
        o:{
            display:'flex',
            fontSize:'13px',
            height:'min-content',
            width:'min-content',
            color:'#dbdbdb',
            margin:'0px 18px',
        },
        lineasO:{
            backgroundColor: '#dbdbdb',
            height: '1px',
            width: '114px',
            display: 'flex',
        },
        contentInputs:{
            height:'max-content',
            width:'100%',
            display:'flex',
            flexFlow: 'column',
            justifyCenter: 'center',
            alignItems: 'center',
        },
        inputs:{
            height:'38px',
            width:'268px',
            padding:'9px 0px 7px 8px',
            margin:'0px 0px 5px',
            display:'flex',
            border: 'solid',
            borderWidth: '0.5px',
            borderHeight: '0.5px',
            borderColor: '#dbdbdb',
            borderRadius: '3px', 
            fontSize:'12px',
            backgroundColor:'#FAFAFA',
        },
        img: {
            height: '24px',
            width: '24px',
            borderRadius: '50%',
            display: 'flex'
        },

    };
    return (
        <div style={_stylesLogin.container}>
            <div style={_stylesLogin.sub_container}>
                {isTablet && 
                <div style={_stylesLogin.divCelulares} >
                    <img style={_stylesLogin.imgLoginCelular} alt="dsd" src={img1}/>
                    
                </div>
                }
                <div style={_stylesLogin.container_SignIn}>
                    <img style={_stylesLogin.font_insta} src= {imginsta} alt="" />
                    
                    <div style={_stylesLogin.contentInputs}>
                        <input style={_stylesLogin.inputs} type="text" placeholder="telefono, usuario o correo electrónico"/>
                        <input style={_stylesLogin.inputs} type="text" placeholder="contraseña" />
                    </div>
                    <div style={_stylesLogin.login_btn}>
                        Log In
                    </div>
                    <div style={_stylesLogin.contentLineas}>
                        <div style={_stylesLogin.lineasO}></div>
                        <div style={_stylesLogin.o}> O </div>
                        <div style={_stylesLogin.lineasO}></div>
                    </div>
                    <div onClick={signIn} style={_stylesLogin.login_btn}>
                        <img style={_stylesLogin.img} src={imgGoogle} alt="google" /> Sign in with Google
                    </div>
                </div>
            </div>
            <FooterLogin />
        </div>

    );
}

export default Login;