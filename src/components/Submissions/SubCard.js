import { Table } from "react-bootstrap";
const SubCard = ({attemptNo, time, progbar, button}) => {
    return (
        <div className="subcard">
        <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="card scard">
            <div className="card-body">
            <Table responsive className="table table-borderless">
              <tbody>
                <tr>
                  <td><p className="subtext">{attemptNo}</p></td>
                  <td><p className="subtext">{time}</p></td>
                  <td><p className="progbar">{progbar}</p></td>
                  <td>{button === "yes" && (
                    <button className="btn  btn1 sub-button">View</button>
                  )}</td>
                </tr>

              </tbody>
            </Table>
              {/* <div className="row contents">
              <div className="col-sm-1"></div>
                <div className="col-sm-2 ">
                  <p>{attemptNo}</p>
                </div>
                <div className="col-sm-4 justify-content-center">
                  <p>{time}</p>
                </div>
                <div className="col-sm-2 progbar justify-content-center">
                  <p>{progbar}</p>
                </div>
                <div className="col-sm-2 ">
                  {button === "yes" && (
                    <div className="btn btn-dark btn1">Attempt</div>
                  )}
                </div>
                <div className="col-sm-1"></div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>            
        </div>
      );
}
 
export default SubCard;