import WebCard from "./WebCard";
import "./WebTeam.css";

const WebTeam = () => {
  const ourTeam1 = [
    { name: "Varada Kalaskar", src: "" },
    { name: "Megha Dandapat", src: "" },
    { name: "Esha Anvekar", src: "" },
  ];
  const ourTeam2 = [
    { name: "Atharva Naphade", src: "" },
    { name: "Neil Deshpande", src: "" },
    { name: "Abhay", src: "" },
  ];
  return (
    <div className="container">
      <div className="section ourTeam">
        <header className="text-center">
          <h2>
            Meet <strong>Our Team</strong>
          </h2>
        </header>
        <div className="row row1">
          {ourTeam1.map((member) => {
            const { name, src } = member;
            return <WebCard name={name} src={src} />;
          })}
        </div>
        <div className="row row2">
          {ourTeam2.map((member) => {
            const { name, src } = member;
            return <WebCard name={name} src={src} />;
          })}
        </div>
        <div className="space"></div>
      </div>
    </div>
  );
};

export default WebTeam;
