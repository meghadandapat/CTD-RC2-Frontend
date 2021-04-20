import React from 'react';
import './Login.css';
import User from './User';

import illusion from '../assets/illusion.jpg';

 const Login = () =>{

       return(
      <React.Fragment>
        <div class= "container">
         <div class="row dbox">
           <div class="col-sm-6 cbox">
              <div className="card illustration">
              <div className="card-body">
             
             <img src={illusion} className="illusion-container"></img>
             </div>
             </div></div>
           <div class="col-sm-6 cbox">
           <User/>
           </div>
           </div>
         </div>
      </React.Fragment>
     )
}
export default Login;
