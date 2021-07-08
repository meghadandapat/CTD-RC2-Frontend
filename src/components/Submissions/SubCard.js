import { Table } from "react-bootstrap";
import ViewCode from './ViewCode'
import { ProgressBar} from "react-bootstrap";
const SubCard = ({ srNo, time, progbar,id }) => {

  if (srNo < 10) {
  srNo = `${0}`+srNo
}

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
                  <td><p className="subtext">{srNo}</p></td>
                  <td><p className="subtext">{time}</p></td>
                  <td><p className="progbar"><ProgressBar animated
                  now={progbar}/></p></td>
                  <td>
                    <ViewCode id={id}/>
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