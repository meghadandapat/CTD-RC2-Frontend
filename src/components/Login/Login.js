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
                <div className="rc2Title">
                  <h1 className="rc2Title1">Reverse Coding </h1>
                  <h1 className="rc2Title2">2.0</h1>
                </div>
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

