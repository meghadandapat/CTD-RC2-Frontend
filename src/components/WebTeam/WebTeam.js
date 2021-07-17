import WebCard from "./WebCard";
import "./WebTeam.css";
import Neil from "./assets/neil.jpg";

const WebTeam = () => {
  const ourTeam = [
    { name: "Varada Kalaskar", src: "../img/varada.jpeg" },
    { name: "Megha Dandapat", src: "../img/megha.jpeg" },
    { name: "Esha Anvekar", src: "../img/esha.jpeg" },
    { name: "Atharva Naphade", src: "../img/atharva.jpeg" },
    { name: "Neil Deshpande", src: "../img/neil.jpg" },
    { name: "Abhay", src: "" },
  ];

  return (
    <div className="container">
      <div className="section ourTeam">
        <header className="text-center">
          <h2>
            <strong>Meet Our Team</strong>
          </h2>
        </header>
        <div className="row row1">
          {ourTeam.map((member) => {
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
