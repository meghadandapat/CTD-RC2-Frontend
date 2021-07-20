import './CodeLoader.css';
import React from 'react'
import Preloader from "../Preloader/Preloader";
const CodeLoader = () => {
    return (
        <React.Fragment>
            <Preloader/>
            {/* <div class="spinner-box">
                <div class="circle-border">
                    <div class="circle-core"></div>
                </div>
               
            </div> */}
            <p class="line1 anim-typewriter">Your code is being executed...</p>
        </React.Fragment>
    );
        
}
 
export default CodeLoader;