import "./Team.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import WebCard from "./WebCard";
import Varada from "./assets/varada.jpeg"
import Megha from "./assets/megha.jpg"
import Esha from "./assets/esha.jpeg"
import Atharva from "./assets/atharva.jpeg"
import Neil from "./assets/neil.jpg"

const OurTeam = () => {
  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <div>
      <Button onClick={goBack} className="close-button">
        X
      </Button>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="centered-team " style={{width:"100%"}}>
        <div className="row mar justify-content-center">
          <WebCard name={"Varada Kalaskar"} img={Varada} github={"https://github.com/varada-kalaskar"} linkedin={"https://www.linkedin.com/in/varada-kalaskar-2316b2217/"}/>
            <WebCard name={"Megha Dandapat"} img={Megha} github={"https://github.com/meghadandapat"} linkedin={"https://www.linkedin.com/in/megha-dandapat-46152519b/"}/>
          <WebCard name={"Esha Anvekar"} img={Esha} github={"https://github.com/eshanvekar-01" } linkedin={ "https://www.linkedin.com/in/esha-anvekar-998436211/"}/>
        </div>
        <div className="row mar justify-content-center" style={{marginTop:"2vw"}}>
            <WebCard name={"Atharva Naphade"} img={Atharva} github={"https://github.com/atharvanaphade"} linkedin={"https://www.linkedin.com/in/atharva-naphade-540236148/"} portfolio={"https://atharvanaphade.me" }/>
          <WebCard name={"Neil Deshpande"} img={Neil} github={"https://github.com/deshpandeneil" } linkedin={"https://www.linkedin.com/in/neil-deshpande-908aa118b/" }/>
        </div>
        <div className="spaceteam"></div>
      </div>
      </div>
      </div>
  );
};

export default OurTeam;
