import React, { useState } from "react";
import Iconlupa from '../../../assets/lupa.png';

const SearchBar = () => {

    const [searchBar, setSearchBar] = useState('#EFECEC');

    const _stylesSearchBar = {
        containterBar: {
            display: 'flex',
            width: '215px',
            height: '28px',
            justifyContent:'center',
            border: 'solid',
            borderWidth: '0.5px',
            borderHeight: '0.5px',
            backgroundColor:'#fafafa',
            borderColor: '#dbdbdb',
            borderRadius: '3px', 
            alignItems:'center',
        },
        searchIcon: {
            display: 'inline-block',
            marginRight: '6px',
            verticalAlign: 'baseline',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '-399px -321px',
            height: '12px',
            width: '12px',
        },
        input: {
            height: '18px',
            width: '189px',
            border: 'none',
            backgroundColor:'#fafafa',
            fontSize:'15px',
        },

    }


    return (
        <div style={_stylesSearchBar.containterBar}>
            <div class="eyXLr">
                <img style={_stylesSearchBar.searchIcon} src= {Iconlupa} alt="imglupa"/>
                <input style= {_stylesSearchBar.input} placeholder="Busca" type="text"/>
            </div>
        </div>

    );
}

export default SearchBar;