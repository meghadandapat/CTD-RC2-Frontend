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
      <div className="container">
        <div className="row mar justify-content-center">
          <WebCard name={"Varada Kalaskar"} img={Varada} github={"https://github.com/varada-kalaskar"} linkedin={""}/>
          <WebCard name={"Megha Dandapat"} img={Megha} github={"https://github.com/meghadandapat"} linkedin={"" }/>
          <WebCard name={"Esha Anvekar"} img={Esha} github={"https://github.com/eshanvekar-01" } linkedin={ ""}/>
        </div>
        <div className="row mar justify-content-center" style={{marginTop:"2vw"}}>
          <WebCard name={"Atharva Naphade"} img={Atharva} github={"https://github.com/atharvanaphade" } linkedin={"" }/>
          <WebCard name={"Neil Deshpande"} img={Neil} github={"https://github.com/deshpandeneil" } linkedin={"" }/>
        </div>
        <div className="spaceteam"></div>
      </div>
    </div>
  );
};

export default OurTeam;
