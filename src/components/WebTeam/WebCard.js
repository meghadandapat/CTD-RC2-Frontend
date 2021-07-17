import { Link } from "react-router-dom";
import "./WebTeam.css";
const WebCard = ({ name, src }) => {
  return (

      <div className="col-12 col-sm-6 col-md-4 i align-items-center imagecard">
        <div className="c text-center">
          <div className="wrap">
            <img
              src={src}
              alt={name}
              // width="300"
              // height="450"
              className="img-responsive"
            />
            <div className="info">
              <h5 className="name">{name}</h5>
            </div>
          </div>
          <div className="more">
            <div className="socials">
              <Link to="" className="github">
                <i className="fa fa-github"></i>
              </Link>
              <Link to="" className="linkedin">
                <i className="fa fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default WebCard;
