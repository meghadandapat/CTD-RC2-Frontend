import {Link} from "react-router-dom";
const WebCard = ({ name, imgurl, altText }) => {
    return (
    <div className="row">
    <div className="col-xs-6 col-sm-4 col-md-3 i">
        <div className="c text-center">
            <div className="wrap">
                        <img src={imgurl} alt={altText} width="270" height="270" className="img-responsive" />
                <div className="info">
                            <h3 className="name">{name}</h3>
                    
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