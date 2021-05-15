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
                                        <td className="cardquestno">
                                            <h6>{qno}</h6>
                                        </td>
                                        <td className="cardprogressb">
                                            <h6>{progbar}</h6>
                                        </td>
                                        <td className="cardattempno">
                                            <h6>{attempts}</h6>
                                        </td>
                                        <td className="cardattempb">
                                            {button==="yes" && <div className="btn qbtn btn-dark"><div class="attempt">Attempt</div></div>}
                                            
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