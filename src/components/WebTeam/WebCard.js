import {Link} from "react-router-dom";
import './WebTeam.css'
const WebCard = ({ name, src }) => {
    return (
    <div className="row">
    <div className="col-sm-11 i align-items-center">
        <div className="c text-center">
            <div className="wrap">
                        <img src={src} alt={name} width="200" height="250" className="img-responsive" />
                <div className="info">
                            <h3 className="name">{name}</h3>
                    
                </div>
            </div>
            <div className="more">
             
                <div className="socials">
                    <Link to="" className="github"><i className="fa fa-github"></i></Link>
                    <Link to=""  className="linkedin"><i className="fa fa-linkedin"></i></Link>
                   
                </div>
            </div>
        </div>
            </div>
            </div>);
}
 
export default WebCard;