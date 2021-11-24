import './App.css';
import React from 'react';
import HeaderLayout from './components/Header-Layout/InstagramHeader';
import InstaLayout from './components/Insta-Layout/InstaLayout';
import { auth } from './initializers/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './initializers/Login';

function App() {

  const [user] = useAuthState(auth);
  
  const _stylesLayout = {
    max_container: {
        margin: 0,
        padding: 0,
        height: '100%',
        width: '100%',
        position: 'absolute',
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        backgroundColor:'#fafafa',
        zIndex:'-11',
    }
  };
    return (
      user ?
      <div style={_stylesLayout.max_container}>
        <HeaderLayout/>
        <InstaLayout/>
      </div>
      :
        <Login/>
    );
};
export default App;