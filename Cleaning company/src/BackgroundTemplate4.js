import './App.css';
import './Products/product.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const BackgroundTemplate4= (props) => {

    const [showPage, setShowPage] = useState(true);

    const togglePage = () => {
        setShowPage(!showPage);
    };

    return (
        <div>
            {showPage ? (
                <PageOne togglePage={togglePage}/>
            ) : (
                <PageTwo togglePage={togglePage}/>
            )}
        </div>
    );
}

    const PageOne = ({togglePage}) => {
        const form = useRef();
        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_mhx3vaa', 'template_z2vqake', form.current, 'fRMN05Dkgk-R3Ecqa')
                .then((result) => {
                    console.log(result.text);
                    console.log("Message sent. I will respond via email soon.");
                }, (error) => {
                    console.log(error.text);
                });
        };

        function alertIt() {
                alert('Thanks');
            };


        return (
            <div id="center">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Your Name</label>
                    <input type="text" className='some-class' name="user_name"/>
                    <br></br>
                    <label>Email</label>
                    <input type="email" className='some-class' name="user_email"/>
                    <br></br>
                    <label>Message:</label>
                    <p>If you wish for me to call you instead put your number in the message.</p>
                    <textarea className='some-class-message' name="message"/>
                    <input type="submit" className='some-class-button' onClick={alertIt} value="Send"/>
                </form>
            </div>
        )
    }

    const PageTwo= ({ togglePage }) => {
        return (
            <div className='congrats'>
                <h1>Thanks for inputting in your email!</h1>
                <h1>Please wait for my response in your email.</h1>
            </div>
        );
    };





export default BackgroundTemplate4;