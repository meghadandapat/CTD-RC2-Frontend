import { Link } from "react-router-dom";
import "./Team.css";
const WebCard = ({ name, img, github, linkedin }) => {
  return (

    <div className="col-12 col-sm-6 col-md-4 col-lg-4 justify-content-center d-flex" >
    <div className="our-team">
      <div className="picture">
        <img
          className="img-fluid"
            src={img}
            alt={name}
        />
      </div>
      <div className="team-content">
          <h4 className="name">{name}</h4>
       
      </div>
      <ul className="social">
        <li>
          <a
            href={github}
            className="fa fa-github"
              aria-hidden="true"
              target="_blank"
          />
        </li>
        <li>
          <a
            href={linkedin}
            className="fa fa-linkedin"
              aria-hidden="true"
              target="_blank"
          />
        </li>
      </ul>
    </div>
  </div>
  
  );
};

export default WebCard;
