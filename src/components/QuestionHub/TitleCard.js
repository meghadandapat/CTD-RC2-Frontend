import { Table } from 'react-bootstrap';
import './Card.css';
const TitleCard = () => {
    return ( 
        <div className="titlecard">
            <div className="row">
                <div className="col-sm-1">

                </div>
                <div className="col-sm-10">
                    <div className="card qhubcard">
                        <div className="card-body mb-2">
                            <Table responsive className="table table-borderless">
                                <thead>
                                    <tr>
                                        <td></td>
                                        <td className="questno justify-content-left">
                                            <h6>SrNo.</h6>
                                        </td>
                                        <td className="progressb">
                                            <h6>Progress</h6>
                                        </td>
                                        <td className="attempno">
                                            <h6>Attempts</h6>
                                        </td>
                                        <td className="attempb"></td>
                                        <td></td>
                                        
                                    </tr>
                                </thead>
                            </Table>
                            
                        </div>
                    </div>
                </div>
                <div className="col-sm-1">

                </div>
            </div>
        </div>
     );
}
 
export default TitleCard;