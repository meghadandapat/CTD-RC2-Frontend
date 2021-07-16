import './CodeLoader.css';
import React from 'react'

const CodeLoader = () => {
    return (
        <React.Fragment>
            <div class="spinner-box">
                <div class="circle-border">
                    <div class="circle-core"></div>
                </div>
               
            </div>
            <h5 style={{ color: "#AB5FC6", textAlign: "center" , 
            lineHeight: "10vh"}}>Your code is being executed...</h5>
        </React.Fragment>
    );
        
}
 
export default CodeLoader;