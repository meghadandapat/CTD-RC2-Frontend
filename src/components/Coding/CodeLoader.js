import './CodeLoader.css';

const CodeLoader = () => {
    return ( <div class="spinner-box">
    <div class="circle-border">
      <div class="circle-core"></div>
        </div>
    <h6 style={{color:"#AB5FC6", textAlign:"center"}}>Your code is getting executed.</h6>    
  </div> );
}
 
export default CodeLoader;