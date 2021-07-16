import { Table } from 'react-bootstrap';
import './Card.css';
const TitleCard = () => {
    return ( 
        <div className="titlecard">
            <div className="row">
                <div className="col-sm-1">

                </div>
                <div className="col-sm-10">
                    <div className="card title">
                        <div className="card-body mb-2">
                            <Table responsive className="table table-borderless title-table">
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td className="questno justify-content-left">
                                            <p className="titlecontent">SrNo.</p>
                                        </td>
                                        <td className="progressb">
                                            <p className="titlecontent">Progress</p>
                                        </td>
                                        <td className="attempno">
                                            <p className="titlecontent">Attempts</p>
                                        </td>
                                        <td className="attempb"></td>
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
 
export default TitleCard;