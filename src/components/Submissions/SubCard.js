import { Table } from "react-bootstrap";
import ViewCode from './ViewCode'
const SubCard = ({ attemptNo, time, progbar }) => {
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
                  <td>
                    <ViewCode/>
                </td>
                </tr>

              </tbody>
            </Table>
              
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>            
        </div>
      );
}
 
export default SubCard;