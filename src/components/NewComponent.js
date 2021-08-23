import React, { useState } from 'react';

import './NewComponent.css';
import ComponentDate from './ComponentDate';


const NewComponent = (props) => {

    const [title, setTitle] = useState(props.title);
    console.log('NewComponents evaluated by React');

    const clickHandler = () => {
        setTitle('Updated!');
        console.log('title');
    }

    return (
     
            <div className="new-component">
                <ComponentDate date={props.date}></ComponentDate>
                    <div className="new-component-detail">
                        <h2>{title}</h2>
                    <div className="new-component-price">${props.amount}</div>
                    <button onClick={clickHandler}>Change Title</button>
                </div>
            </div>
     
    )
}

export default NewComponent;