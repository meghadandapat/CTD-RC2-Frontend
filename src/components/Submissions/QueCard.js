import { Table } from "react-bootstrap";
const QueCard = ({qno}) => {

    return ( 
        <div className="QueCard">
            <div className="row">
                <div className="col-sm-1">

                </div>

                <div className="col-sm-10">
                    <div className="question">
                        <h3 className="title-text question-number">Question {qno}</h3>
                    </div>                    
                    <div className="card qcard">
                        <div className="card-body mb-2">
                            <Table responsive className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td className="td1"></td>
                                        <td className="srno justify-content-left">
                                            <p className="title-text ">SrNo.</p>
                                        </td>
                                        <td className="stime">
                                            <p className="title-text ">Time</p>
                                        </td>
                                        <td className="sprogress">
                                            <p className="title-text ">Progress</p>
                                        </td>
                                        <td className="sview"></td>
                                        
                                        
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
 
export default QueCard;