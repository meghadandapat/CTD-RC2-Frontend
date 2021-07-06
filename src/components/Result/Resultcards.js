import "./Result.css";
const Resultcards = ({ username, rank, score }) => {
  return (
    <div className="resultcards ">
      <div className="card resultcard">
        <div className="card-body rbody">
          <div class="result-circle">
            <div class="result-content">
              <strong>
                <h1>{ username.charAt(0).toUpperCase}</h1>
              </strong>
            </div>
          </div>
          <div className="row justify-content-center">
            <p><h3 className="res-text">Username</h3>
            <h2 className="resuser-text">{username}</h2>
            </p>
          </div>
          <div className="row justify-content-center float-left">
            <p><h3 className="res-text">Rank</h3>
            <h2 className="resuser-text">{rank}</h2>
            </p>
          </div>
          <div className="row justify-content-center float-right">
            <p><h3 className="res-text">Score</h3>
            <h2 className="resuser-text">{score}</h2></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resultcards;