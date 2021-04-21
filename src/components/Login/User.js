import React ,{useState}from 'react';
// import Radio from '@material-ui/core/Radio';

const User = () => {
    const[name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login"> 
        <div className="card login-card">
              <div className="card-header mid">
                <h1>Welcome!</h1></div>
                 <div className="card-body">
                         <form action="" className="main">
        
                                 <div class="form-group row head">
                        
                                   <i class='fas fa-user-circle rid'></i>
                      
                        <input type="required" class="form-control" name="name" id="name" placeholder= "Username" value={name} onChange = {
                        (e) => setName(e.target.value)
                    }></input>
                    </div>
                <div>
                     <div class="form-group row head1">
                         
                    <label htmlFor="email"></label>
                    <i class='fas fa-envelope-open rid'></i>
                    <input  type="text" name="email"  class="form-control" id="email" placeholder= "Email" value={email} onChange = {
                        (e) => setEmail(e.target.value)}></input>
                        </div>
                    </div>
             

                <div>
                     <div class="form-group row head2">
                          
                         <i class='fas fa-lock rid'></i>
                         
                    <label htmlFor="password"></label> 
                    <input type="password" name="password" class="form-control" id="password" placeholder= "Password"  autoComplete="off" value={password} 
                    onChange = {
                        (e) => setPassword(e.target.value)}></input>
                        </div>
                        </div>
              
                <div class="form-grp">
                   
                   <br/>
                   <button className="wid" type="btn" alt="button">Login</button>
                  </div>
                  
                 
            </form>
        </div> 
        </div>
        </div>

    )
}

export default User