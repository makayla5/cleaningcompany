import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import BackgroundTemplate from "./BackgroundTemplate";
import BackgroundTemplate2 from "./BackgroundTemplate2";
import BackgroundTemplate3 from "./BackgroundTemplate3";
import BackgroundTemplate4 from "./BackgroundTemplate4";



function App() {
    return (
        <BrowserRouter>
            <div className={"content"}>
                <div className={"linkStyle"}>
                <ul>

                    <li>
                        <Link to="/BackgroundTemplate2">Home</Link>
                    </li>
                    <li>
                        <Link to="/BackgroundTemplate3">Price</Link>
                    </li>
                    <li>
                        <Link to="/BackgroundTemplate4">Book a Cleaning</Link>
                    </li>
                </ul>
                </div>
                <hr />
                </div>
                <Routes>
                    <Route path="/cd" element={<BackgroundTemplate2  input={"background-template"} />} />
                    <Route path="/" element={<BackgroundTemplate2 input={"background-template2"} />} />
                    <Route path="/BackgroundTemplate" element={<BackgroundTemplate  input={"background-template"} />} />
                    <Route path="/BackgroundTemplate2" element={<BackgroundTemplate2 input={"background-template2"} />} />
                    <Route path="/BackgroundTemplate3" element={<BackgroundTemplate3  input={"background-template3"} />} />
                    <Route path="/BackgroundTemplate4" element={<BackgroundTemplate4  input={"background-template2"} />} />

                </Routes>
        </BrowserRouter>
    );
}

export default App;