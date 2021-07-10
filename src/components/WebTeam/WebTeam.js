import WebCard from './WebCard'
import './WebTeam.css'

const WebTeam = () => {
    return ( <div class="container">
    <div class="section ourTeam">
        <header class="text-center">
            <h2>Meet <strong>Our Team</strong></h2>
        </header>
            <div className="row row1">                
                <div className="col">
                    <WebCard />
                </div>
                <div className="col">
                    <WebCard />
                </div>
                <div className="col">
                    <WebCard />
                </div>
            </div>
            <div className="row row2">
                <div className="col">
                    <WebCard />
                </div>
                <div className="col">
                    <WebCard />
                </div>
                <div className="col">
                    <WebCard />
                </div>
            </div> 
            <div className="space"></div>       
            </div>
            </div>);
}
 
export default WebTeam;