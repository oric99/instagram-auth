import { React, useState }from 'react';
import { auth } from '../initializers/firebase';

const Main = () => {

    // Signout function
    const logout = () => {
        auth.signOut();
    }
    const [hoverLogout, setHoverLogout] = useState('#0095f6');

    const _styles = {
        buttonStyles:{
            margin: '8px 10px',
            padding: 0,
            width: '100px',
            height: '30px',
            cursor: 'pointer',
            backgroundColor: `${hoverLogout}`,
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            font: 'inherit',
            borderRadius: '8px',
        },
    }
    return (
        <div>
            {
                auth.currentUser.displayName
            } <br/>
            <button style={_styles.buttonStyles} 
            id="logOutbtn" onClick={logout}
            onMouseEnter={() => setHoverLogout('#44aef3')}
            onMouseOut={() => setHoverLogout('#0095f6')}
            >
                Log Out
            </button>
        </div>
    );
}
export default Main;