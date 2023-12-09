import React from 'react';
import './Products/product.css' ;
import ProductTemplate from "./Products/ProductTemplate";
import Blush from './images/blush.png'
function BackGroundTemplate3({input, product, paragraph})  {
    return(
        <div className={input}>

            <div id={"content-container"}>
                <div className={"sub-container"}>
                <div className={"container"}>
                <ProductTemplate product={"General Cleaning"} input2={"1 bedroom apartment: $65 "} input3={"2 bedroom apartment: $75"} input4={"3 bedroom or larger is $130 per cleaning session"}></ProductTemplate>
                </div>
                </div>
                <div className={"sub-container"}>
                <div className={"container"}>
                    <ProductTemplate product={"Boundaries"} input={"I kindly ask for your respectful treatment when I come to clean your house. Maintaining a professional and harassment-free working relationship is a priority for me."} input2={"If you're seeking a trustworthy person to enter your home, I assure you that it's me; however, I also request that my boundaries be respected."} ></ProductTemplate>
                </div>
                </div>
                <div className={"sub-container"}>
                    <div className={"container"}>
                        <ProductTemplate product={"65+ individuals"} input={"$15 off"}  image={Blush} width={"70%"} height={"30%"}></ProductTemplate>
                    </div>
                </div>
            </div>
            </div>
    );
}
export default BackGroundTemplate3;