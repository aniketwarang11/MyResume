import React from 'react';
import './button.css';

function button(props) {
    return (
        <div>
            <button className='button' onClick={props.click}>{props.btnName}</button>
        </div>
    )
}

export default button
