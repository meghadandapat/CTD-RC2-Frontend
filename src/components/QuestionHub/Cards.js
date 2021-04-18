import { Table } from 'react-bootstrap';
import './Card.css';
const Cards = ({qno, progbar, attempts, button}) => {
    return ( 
        <div className="Cards">
            <div className="row">
                <div className="col-sm-1">

                </div>
                <div className="col-sm-10">
                    <div className="card qhubcard">
                        <div className="card-body">
                            <Table responsive className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td className="questno">
                                            <h6>{qno}</h6>
                                        </td>
                                        <td className="progressb">
                                            <h6>{progbar}</h6>
                                        </td>
                                        <td className="attempno">
                                            <h6>{attempts}</h6>
                                        </td>
                                        <td className="attempb">
                                            {button==="yes" && <div className="btn btn-dark"><div class="attempt">Attempt</div></div>}
                                            
                                        </td>
                                        <td></td>
                                        
                                    </tr>
                                </tbody>
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
 
export default Cards;