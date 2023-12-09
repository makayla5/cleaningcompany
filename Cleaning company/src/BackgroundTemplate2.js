import React from 'react';
import './App.css';
import './Products/product.css'
import ParagraphTemplate from "./Paragraphs/ParagraphTemplate";

const BackgroundTemplate2 = (props) => {
    return (
        <div className={props.input}>
            <div className={"container"}>
        <ParagraphTemplate input={"Live in London, Ontario? Customize your cleaning preferences; your satisfaction is our priority. Busy schedule? Save time; let us tackle the dust. Uncover forgotten places with our thorough vacuuming and dusting.  "
            +"Always professionally dressed, we respect your space. Schedule a convenient time for cleaning that suits you. Note that I usually do not work alone. Typically this requires two people, please understand that times are changing and it is a necessary precaution when it comes to visiting the houses of new clients. "} title={"Cleaning Services"}></ParagraphTemplate>
           <ParagraphTemplate title={"Why should I pay for cleaning services?"} input={"Hiring a cleaner contributes to better health because it reduces the amount of allergens, dust and germs. Cleaners can also smell the scents that you may have gotten used to. A clean and organized environment may also improve your mental health and productivity. Another benefit to hiring a house cleaner is the reduction of disputes over housework. Hiring a regular cleaner can help increase the amount of consistent cleanliness to your house and save lots of time! "}></ParagraphTemplate>
           <ParagraphTemplate title={'Who are we?'} input={'I am an experienced cleaner residing in the local community, dedicated to assisting individuals who struggle to find time for household chores. Committed to the belief that a tidy home positively influences mental well-being, I understand the challenges of maintaining cleanliness amid busy schedules. My partner shares my passion for creating a clean and welcoming space, fostering an environment where people can escape the overwhelming cycle of cleaning. Beyond our cleaning services, I find joy in artistic pursuits like drawing and painting, while my partner is dedicated to academic studies. We prioritize transparency, and for your peace of mind, I can provide a clean background check upon request.'}></ParagraphTemplate>
            </div>
            </div>

    )
}

export default BackgroundTemplate2;