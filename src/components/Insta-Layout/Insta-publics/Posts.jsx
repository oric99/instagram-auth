import React, { Component, useState } from 'react';

const Post = () => {

    const _stylesLayout = {
        container: {
            padding: '16px 0px',
            margin: '0px 0px 24px',
            width: '614px',
            height: '118px',
            backgroundColor: 'purple',
            justifyContent:'center',
            alignItems:'center',
            position: 'relative',
            display: 'flex',
            flexFlow: 'column',
        },
        
    };
    return (
        <div style={_stylesLayout.container}>
            aqui los posts
        </div>
        
        
    );
};
export default Post;