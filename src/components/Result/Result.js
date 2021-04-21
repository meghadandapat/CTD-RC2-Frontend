
import Resultcards from "./Resultcards"
import './Result.css';
import Leaderboard from "../Leaderboard/Leaderboard";

const Result = () => {
    return ( 
        <div className="resultpage">
            <div className="row">
                <div className="col-sm-4">
                    <div className="row"><Resultcards header="Username" result="ABC"/></div>
                    <div className="row"><Resultcards header="Rank" result="1"/></div>
                    <div className="row"><Resultcards header="Score" result="80"/></div>
                </div>
                <div className="col-sm-8"><Leaderboard/> </div>
            </div>
        </div>
     );
}
 
export default Result;