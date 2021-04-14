const Cards = ({ qno, progbar, attempts, button }) => {
  return (
    <div className="Cards">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-2 justify-content-center">
                  <p>{qno}</p>
                </div>
                <div className="col-sm-4 justify-content-center">
                  <p>{progbar}</p>
                </div>
                <div className="col-sm-2 justify-content-center">
                  <p>{attempts}</p>
                </div>
                <div className="col-sm-2 justify-content-right">
                  {button === "yes" && (
                    <div className="btn btn-dark">Attempt</div>
                  )}
                </div>
                <div className="col-sm-1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};

export default Cards;
