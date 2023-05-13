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





















export default Main;