import React from 'react';
import './paragraph.css';
const ParagraphTemplate =(props) => {
    return(
        <div className = "paragraph">
            <h1>{props.title}</h1>
            <p>{props.input}</p>
            <hr></hr>
        </div>

    );
}
export default ParagraphTemplate;