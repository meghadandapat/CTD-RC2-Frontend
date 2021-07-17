import WebCard from "./WebCard";
import "./WebTeam.css";
import Neil from "./assets/neil.jpg";

const WebTeam = () => {
  const ourTeam = [
    { name: "Varada Kalaskar", src: "./assets/varada.jpeg" },
    { name: "Megha Dandapat", src: "" },
    { name: "Esha Anvekar", src: "" },
    { name: "Atharva Naphade", src: "" },
    { name: "Neil Deshpande", src: "" },
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
