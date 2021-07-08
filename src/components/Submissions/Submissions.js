import { ProgressBar, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import React from "react";
import "./Submissions.css";
import QueCard from "./QueCard";
import SubCard from "./SubCard";
import ReactPaginate from "react-paginate";
import axiosInstance from "../../axios";

const Submissions = () => {
  let counter = 0;
  const [sub, setSub] = useState([]);
  const [question, setQuestion] = useState(1);

  const handlePageChange = (e) => {
    setQuestion(e.selected + 1);
    console.log(question);
  };

  useEffect(() => {
    axiosInstance.get("submissions/").then((res) => {
      const datas = res.data;
      console.log(datas);
      const filteredSub = datas.filter(
        (submission) => submission.question_id_fk === question
      );
        console.log(filteredSub);
        setSub(filteredSub)
    });
  }, [sub, question]);

  return (
    <div className="sub">
      <ReactPaginate
        previousClassName="hidelabel"
        nextClassName="hidelabel"
        pageClassName="chooseque"
        pageCount={6}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
      <QueCard qno={question} />

      { sub.map((su) => {
         counter++;
        return (
          <SubCard
            id={parseInt(su.pk)}
            srNo={counter}
            time={su.submission_time.substr(11, 5)}
            progbar={su.accuracy}
          />
        )
      }) }
        <div className="subspacing"></div>
    </div>
  );
};

export default Submissions;
