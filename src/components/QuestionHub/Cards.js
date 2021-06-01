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
                            <Table responsive className="table table-borderless qhubtable">
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td className="cardquestno">
                                            <h6 className="quecontent">{qno}</h6>
                                        </td>
                                        <td className="cardprogressb">
                                            <h6 className="quecontent">{progbar}</h6>
                                        </td>
                                        <td className="cardattempno">
                                            <h6 className="quecontent">{attempts}</h6>
                                        </td>
                                        <td className="cardattempb">
                                            <button className="btn qbtn btn-dark attempt">Attempt</button>
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