import {Link} from "react-router-dom";
import './WebTeam.css'
const WebCard = ({ name, imgurl, altText }) => {
    return (
    <div className="row">
    <div className="col-sm-11 i align-items-center">
        <div className="c text-center">
            <div className="wrap">
                        <img src={imgurl} alt={altText} width="200" height="250" className="img-responsive" />
                <div className="info">
                            <h3 className="name">Name:{name}</h3>
                    
                </div>
            </div>
            <div className="more">
             
                <div className="socials">
                    <Link to="" className="facebook"><i className="fa fa-facebook"></i></Link>
                    <Link to=""  className="twitter"><i className="fa fa-twitter"></i></Link>
                   
                </div>
            </div>
        </div>
            </div>
            </div>);
}
 
export default WebCard;