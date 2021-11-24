
import React from 'react';
import { auth } from '../initializers/firebase';

const Main = () => {

    // Signout function
    const logout = () => {
        auth.signOut();
    }

    return (
        <div>
            Wellcome Back <br />
            {
                auth.currentUser.displayName
            } <br/>
            <button id="logOutbtn" onClick={logout}>
                Log Out
            </button>
        </div>
    );
}
export default Main;