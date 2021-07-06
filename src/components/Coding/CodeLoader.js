import './CodeLoader.css';

const CodeLoader = () => {
    return ( <div class="spinner-box">
    <div class="circle-border">
      <div class="circle-core"></div>
        </div>
    <h4 style={{color:"white"}}>Your code is getting executed.</h4>    
  </div> );
}
 
export default CodeLoader;