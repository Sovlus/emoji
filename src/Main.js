import React, { useState } from 'react';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import './App.css';

function Main() {
    const [search, SetSearchValue] = useState('');

    const zmianaWyszukiwania = (event) => {
        SetSearchValue(event.target.value);
    }
};

    return (
        <div className='Main'>
        <h1>Wyszukaj Emoji</h1>
        <input type="text" placeholder='wpisz coś' value={search} onChange={zmianaWyszukiwania} />
       
    )




















export default Main;