import Resultcards from "./Resultcards";
import "./Result.css";

import gold from "../svgs/Gold.svg";
import silver from "../svgs/Silver.svg";
import bronze from "../svgs/Bronze.svg";

const Result = () => {
  return (
    <div className="fluid-container resultpage ">
      <div className="row" style={{ marginTop: "7vh" }}>
        <div className="col-sm-4 ">
          <div className="row justify-content-center">
            <Resultcards username="xyz" rank="111" score="40" />
          </div>
        </div>
        <div className="col-sm-8">
          <div className="row ">
            <div className="col text-center">
              <img className="svgs  svg-down" src={gold} alt="Rank 1" />
              <p className="svg-rank">Megha Dandapat</p>
            </div>
          </div>
          <div className="row row2">
            <div className="col text-center">
              <img className="svgs" src={silver} alt="rank 2" />
              <p className="svg-rank">Megha Dandapat</p>
            </div>
            <div className="col bronze text-center">
              <img className="svgs svg-down" src={bronze} alt="My Happy SVG" />
              <p className="svg-rank">Megha Dandapat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;