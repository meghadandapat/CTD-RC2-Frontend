
import Resultcards from "./Resultcards"
import './Result.css';

import gold from '../svgs/Gold.svg'
import silver from '../svgs/Silver.svg'
import bronze from '../svgs/Bronze.svg' 


const Result = () => {
    return ( 
        <div className="fluid-container resultpage">
             
            <div className="row" style={{marginTop:"7vh"}}>
                <div className="col-sm-4">
                    <div className="row"><Resultcards header="Username" result="ABC"/></div>
                    <div className="row"><Resultcards header="Rank" result="1"/></div>
                    <div className="row"><Resultcards header="Score" result="80"/></div>
                </div>
                <div className="col-sm-8">
                    <div className="row">
                    <img src ={gold} style={{width:"100px",height:"100px"}} alt="My Happy SVG"/><span>1. Megha Dandapat</span></div>
                    <div className="row">
                    <img src ={silver} style={{width:"100px",height:"100px"}} alt="My Happy SVG"/>2. Varada kalaskar</div>
                    <div className="row"> <img src ={bronze} style={{width:"100px",height:"100px"}} alt="My Happy SVG"/>3. Esha Anvekar</div>
            </div>
            </div>
            </div>
     );
}
 
export default Result;