import { Button } from 'bootstrap';
import { Table, NavLink } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import './Card.css';
const Cards = ({qno, progbar, attempts,id}) => {
    
    const handleClick = (e) => {
        window.location.pathname = "coding/" + e.target.id;
    }
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
                                            <button className="attempt btn qbtn btn-dark" id={ id } onClick={ handleClick }>Attempt</button>
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