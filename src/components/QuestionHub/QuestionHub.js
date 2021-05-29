
import './Quehub.css';
import { ProgressBar} from 'react-bootstrap';

import Cards from "./Cards";
import TitleCard from './TitleCard';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../axios';


const QuestionHub = () => {

  const[qs,setQs] = useState([
    {id:1, qsno:1, progress:90, attmp:3},
    {id:2, qsno:2, progress:30, attmp:2},
    {id:3, qsno:3, progress:10, attmp:1},
    {id:4, qsno:4, progress:70, attmp:4},
    {id:5, qsno:5, progress:50, attmp:9},
    {id:6, qsno:6, progress:100, attmp:10}
  ]);

  const [questionData, setQuestionData] = useState({
    loading: true,
    questions: null,
  })

  useEffect(() => {
        axiosInstance.get('questions/').then((res) => {
          const allQuestions = res.data.results;
          console.log(parseInt(allQuestions[0].total_attempts) / 40);
          setQs([
            {id:allQuestions[0].id, qsno:1, progress:(100 * (parseInt(allQuestions[0].correct_attempts) / parseInt(allQuestions[0].total_attempts))), attmp: allQuestions[0].total_attempts},
            {id:allQuestions[1].id, qsno:2, progress:100 * (allQuestions[1].correct_attempts / allQuestions[1].total_attempts), attmp: allQuestions[1].total_attempts},
            {id:allQuestions[2].id, qsno:3, progress:100 * (allQuestions[2].correct_attempts / allQuestions[2].total_attempts), attmp: allQuestions[2].total_attempts},
            {id:allQuestions[3].id, qsno:4, progress:100 * (allQuestions[3].correct_attempts / allQuestions[3].total_attempts), attmp: allQuestions[3].total_attempts},
            {id:allQuestions[4].id, qsno:5, progress:100 * (allQuestions[4].correct_attempts / allQuestions[4].total_attempts), attmp: allQuestions[4].total_attempts},
            {id:allQuestions[5].id, qsno:6, progress:100 * (allQuestions[5].correct_attempts / allQuestions[5].total_attempts), attmp: allQuestions[5].total_attempts},
          ]);
          setQuestionData({ loading: false, questions: null });
          console.log(res.data.results);
        });
  }, [setQuestionData, setQs]);

  console.log(qs);
  
    

    // const [isLoading, setIsLoading] = useState(true);
    // const [show, setShow] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShow(true);
  //   }, 5000)
  // }, [show])

  if (questionData.loading) return <Preloader />

    return (  
        
            <div className="qhub">
                <TitleCard/>
                {qs.map((qs)=>(
                    <Cards qno={qs.qsno} progbar={<ProgressBar animated now={qs.progress} className="progress" /> } 
                    attempts={qs.attmp} id={qs.id} button="yes"/>
                ))}
            </div>
    );
}

export default QuestionHub;