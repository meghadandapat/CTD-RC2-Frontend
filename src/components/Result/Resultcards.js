import "./Result.css";
const Resultcards = ({ username, rank, score }) => {
  return (
    <div className="resultcards ">
      <div className="card resultcard">
        <div className="card-body rbody">
          <div class="result-circle">
            <div class="result-content">
              <strong>
                <h1>A</h1>
              </strong>
            </div>
          </div>
          <div className="row justify-content-center">
            <h3 className="res-text">Username: {username}</h3>
          </div>
          <div className="row justify-content-center">
            <h3 className="res-text">Rank: {rank}</h3>
          </div>
          <div className="row justify-content-center">
            <h3 className="res-text">Score: {score}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resultcards;