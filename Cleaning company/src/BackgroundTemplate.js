import React from 'react';
import './App.css';

const BackGroundTemplate =(props)=> {
    return(
        <div className={props.input}>
            <p>{props.secondEntry}</p>
   </div>
    );
}
export default BackGroundTemplate;