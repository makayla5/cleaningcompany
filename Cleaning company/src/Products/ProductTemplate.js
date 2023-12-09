import React from 'react';
import './product.css';


function ProductTemplate ({ product, paragraph, image, description,input, input2 ,input3, input4 ,width, height})  {
    return(
        <div className={"#content-container"}>
                    <div id={"title-product"}>{product}</div>
                        <img src={image} alt={description} width={width} height={height}/>
            <div id={"font"}>{input}</div>
            <div id={"font"}>{input2}</div>
            <div id={"font"}>{input3}</div>
            <div id={"font"}>{input4}</div>
        </div>
    );
}
export default ProductTemplate;