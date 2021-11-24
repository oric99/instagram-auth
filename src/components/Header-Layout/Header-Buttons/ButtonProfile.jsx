import React, { Component, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../../../App.css';
import Main from '../../../initializers/main';
import Login from '../../../initializers/Login';
import { auth } from '../../../initializers/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const ButtonProfile = () => {
    const [user] = useAuthState(auth);
    const [dropdown, setDropdown] = useState(false);

    const abrirCerrardropdown = () => {
        setDropdown(!dropdown);
    }

    // espacio para el style del botón
    const _styles = {
        divContainer:{
            display:'flex',
            height:'min-content',
            width:'min-content',

        },
        img: {
            height: '30px',
            width: '30px',
            borderRadius: '50%',
            display: 'flex'
        },
    };

    return (
        user ?
            <div style={_styles.divContainer}>
                <Dropdown isOpen={dropdown} toggle={abrirCerrardropdown}>
                    <DropdownToggle className="dropdownToggle">
                        <img src={auth.currentUser.photoURL} alt="user" style={_styles.img} />
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem>Perfil</DropdownItem>
                    <DropdownItem divider />
                        <DropdownItem> < Main /> </DropdownItem>
                    </DropdownMenu>

                </Dropdown>
            </div> :
            <Login/>
    );
};
export default ButtonProfile;