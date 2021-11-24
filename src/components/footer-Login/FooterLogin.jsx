import React from "react";


const FooterLogin = () => {
    const _stylesFooter = {
        container_Footer: {
            position: 'fixed',
            display: 'flex',
            width: '100%',
            height: '100%',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        lineas_titulos: {
            width: '100%',
            height: 'max-content',
            display: 'flex',
            fontSize: '12px',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#8E8E8E'
        },
        linea3: {
            width: '100%',
            height: 'max-content',
            display: 'flex',
            margin: '12px 0px',
            marginBottom: '60px',
            fontSize: '12px',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#8E8E8E'
        },
        titulos: {
            display: 'flex',
            margin: '5px',
            height: 'max-content',
            width: 'max-content',
            cursor: 'pointer',
        }
    };

    return (
        <div styles={_stylesFooter.container_Footer}>
            <div style={_stylesFooter.lineas_titulos}>
                <p style={_stylesFooter.titulos}> Meta</p> 
                <p style={_stylesFooter.titulos}> Información </p>
                <p style={_stylesFooter.titulos}> Blog </p>
                <p style={_stylesFooter.titulos}> Empleo </p>
                <p style={_stylesFooter.titulos}> Ayuda </p>
                <p style={_stylesFooter.titulos}> API </p>
                <p style={_stylesFooter.titulos}> Privacidad </p>
                <p style={_stylesFooter.titulos}> Condiciones </p>
                <p style={_stylesFooter.titulos}> Cuentas destacadas</p>
                <p style={_stylesFooter.titulos}> Hashtags</p>
                <p style={_stylesFooter.titulos}> Ubicaciones</p>
                <p style={_stylesFooter.titulos}> Instagram Lite </p>
            </div>
            <div style={_stylesFooter.lineas_titulos}>
                <p style={_stylesFooter.titulos}>Belleza </p>
                <p style={_stylesFooter.titulos}>Danza</p>
                <p style={_stylesFooter.titulos}>Actividad física</p>
                <p style={_stylesFooter.titulos}>Comida y bebida</p>
                <p style={_stylesFooter.titulos}>Hogar y jardinería</p>
                <p style={_stylesFooter.titulos}>Música</p>
                <p style={_stylesFooter.titulos}> Artes Visuales </p>
            </div>
            <div style={_stylesFooter.linea3}>
                <p style={_stylesFooter.titulos}> Español (España) </p>
                <p style={_stylesFooter.titulos}> © 2021 Instagram from Meta </p>
            </div>
        </div>

    );
}







export default FooterLogin;