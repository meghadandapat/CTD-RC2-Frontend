import './QuestionHub.css';
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./Cards";


const QuestionHub = () => {
    const qs=[1,2,3,4,5,6];
   
    return (  
        <div className="qhub">
            
            <Cards qno={"Question No."} progbar={"Progress"} attempts={"Attempts"}/>
            {qs.map((qs)=>(
                <Cards qno={qs} progbar={<ProgressBar variant="secondary" now={Math.floor(Math.random() * (100 - 0))} className="progress" /> } 
                attempts={Math.floor(Math.random() * 10) + 1} button="yes"/>
            ))}
        </div>
    );
}

export default QuestionHub;