const Cards = ({qno, progbar, attempts, button}) => {
  return ( 
      <div className="Cards">
          <div className="row">
              <div className="col-sm-1">

              </div>
              <div className="col-sm-10">
                  <div className="card qhubcard">
                      <div className="card-body">
                          <div className="row">
                              <div className="col-sm-1">

                              </div>
                              <div className="col-sm-2 justify-content-center">
                                  <h6>{qno}</h6>
                              </div>
                              <div className="col-sm-4 justify-content-center">
                                  <h6>{progbar}</h6>
                              </div>
                              <div className="col-sm-2 justify-content-center">
                                  <h6>{attempts}</h6>
                              </div>
                              <div className="col-sm-2 justify-content-right">
                                  {button==="yes" && <div className="btn btn-dark"><div class="attempt">Attempt</div></div>}
                                  
                              </div>
                              <div className="col-sm-1">
                                  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-sm-1">

              </div>
          </div>
      </div>

   );
}

export default Cards;