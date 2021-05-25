
import './Quehub.css';
import { ProgressBar} from 'react-bootstrap';

import Cards from "./Cards";
import TitleCard from './TitleCard';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';


const QuestionHub = () => {
    const[qs,setQs] = useState([
        {id:1, qsno:1, progress:90, attmp:3},
        {id:2, qsno:2, progress:30, attmp:2},
        {id:3, qsno:3, progress:10, attmp:1},
        {id:4, qsno:4, progress:70, attmp:4},
        {id:5, qsno:5, progress:50, attmp:9},
        {id:6, qsno:6, progress:100, attmp:10}
    ]);

    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000)
  }, [show])

  if (!show) return <Preloader />

    return (  
        
            <div className="qhub">
                <TitleCard/>
                {qs.map((qs)=>(
                    <Cards qno={qs.qsno} progbar={<ProgressBar animated now={qs.progress} className="progress" /> } 
                    attempts={qs.attmp} button="yes"/>
                ))}
            </div>
    );
}

export default QuestionHub;