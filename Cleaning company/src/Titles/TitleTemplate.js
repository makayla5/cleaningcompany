import React from 'react';
import './title.css'
const TitleTemplate =(props) => {
    return(
        <div className = "title">
            <h1>{props.title}</h1>
            <hr></hr>
        </div>
    );
}
export default TitleTemplate;