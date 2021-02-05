import React from 'react';
import './style.css';

function Button(props){

    return (
        <button className={"button " + props.className} onClick={() => props.onClick()}>
            {props.name}
        </button>
    );   
}

export default Button;