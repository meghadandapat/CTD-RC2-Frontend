import './Result.css';
const Resultcards = ({header, result}) => {
    return ( 
        <div className="resultcard">
            <div className="card result">
                <div className="card-header">
                    <h2>{header}</h2>
                </div>
                <div className="card-body">
                    <h2>{result}</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Resultcards;