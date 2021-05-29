import './Result.css';
const Resultcards = ({username, rank, score}) => {
    return ( 
        <div className="resultcards ">
            
            <div className="row">
            <div className="card resultcard">
            <div className="card-body rbody">
                   <h3 className="res-text" >Username: {username}</h3> 
                   {/* <h3 className="res-text">Rank: {rank}</h3>
                   <h3 className="res-text">Score: {score}</h3> */}

                </div>
            </div>
            </div>
            <div className="row">
            <div className="card resultcard">
            <div className="card-body rbody">
                   {/* <h3 className="res-text" >Username: {username}</h3>  */}
                   <h3 className="res-text">Rank: {rank}</h3>
                   {/* <h3 className="res-text">Score: {score}</h3> */}

                </div>
                </div>
            </div>
            <div className="row">
            <div className="card resultcard">
            <div className="card-body rbody">
                   {/* <h3 className="res-text" >Username: {username}</h3> 
                   <h3 className="res-text">Rank: {rank}</h3> */}
                   <h3 className="res-text">Score: {score}</h3>

                </div>
                </div>
            </div>
            
                
            
        </div>
     );
}
 
export default Resultcards;