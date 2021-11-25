import React, { Component, useState } from 'react';
import SliderStories from './SliderStories.jsx';
import { useMediaQuery } from 'react-responsive';
import Post from './Post.jsx';

const InstaPublics = () => {
    

const isTablet = useMediaQuery({ query: '(min-width: 768px)' })

    const _stylesLayout = {
        max_container: {
            padding: 0,
            margin: '0px 28px 0px 0px',
            width: '614px',
            height: '100%',
            backgroundColor: '#FAFAFA',
            justifyContent:'flex-start',
            alignItems:'center',
            position: 'relative',
            display: 'flex',
            flexFlow: 'column',
        },
        postsDiv:{
            top:'144px',
        },
        
    };
    return (
        <div style={_stylesLayout.max_container}>
            <SliderStories/>
            <div style={_stylesLayout.postsDiv}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
        
        
    );
};
export default InstaPublics;