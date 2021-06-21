const QueCard = ({qno}) => {

  return ( 
      <div className="QueCard">
        <div className="row queCard">
          <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card qcard">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2 ">
                      <p className="quetext">Question no {qno}</p>
                    </div>
                    <div className="col-sm-9"></div>
                  </div>
                </div>
              </div>
            </div>
          <div className="col-sm-1"></div>
      </div>
     
      </div>
  );
}

export default QueCard;