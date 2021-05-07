
import Resultcards from "./Resultcards"
import './Result.css';

import gold from '../svgs/Gold.svg'
import silver from '../svgs/Silver.svg'
import bronze from '../svgs/Bronze.svg' 


const Result = () => {
    return ( 
        <div className="fluid-container resultpage ">
             
            <div className="row" style={{marginTop:"7vh"}}>
                <div className="col-sm-5 ">
                    <div className="row "><Resultcards username="xyz" rank="111" score="40" /></div>
                </div>
                <div className="col-sm-7">
                    <div className="row ">
                        <div className="col text-center">
                        <img className="svgs  svg-down" src ={silver} alt="My Happy SVG"/>
                        <p className="svg-rank">Megha Dandapat</p>
                        </div>
                        <div className="col text-center">
                        <img className="svgs" src ={gold} alt="My Happy SVG"/>
                        <p className="svg-rank">Megha Dandapat</p>
                        </div>
                        <div className="col bronze text-center">
                        <img className="svgs svg-down" src ={bronze} alt="My Happy SVG"/>
                        <p className="svg-rank">Megha Dandapat</p>
                        </div>
                    
                    </div>

                    {/* <div className="row">
                    <img className="svgs" src ={silver} alt="My Happy SVG"/>2. Varada kalaskar</div>
                    <div className="row"> 
                    <img className="svgs" src ={bronze} alt="My Happy SVG"/>3. Esha Anvekar</div> */}
            </div>
            </div>
            </div>
     );
}
 
export default Result;