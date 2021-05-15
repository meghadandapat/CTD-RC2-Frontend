import React ,{useState}from 'react';
import Radio from '@material-ui/core/Radio';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ffc371' }, 
    secondary: { main: '#ffc371' }, 
  },
});
const User = () => {
    const[name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     
    const [gender,setGender] = useState("Senior");
    const handleGender=(e)=>{
        console.warn(e.target.value)
        setGender(e.target.value)

    }

    return (
        <div className="login"> 
        <div className="row">
          <div className="col-sm">
        <div className="card login-card">
              <div className="card-header mid">
                <h1 className="rc2title">REVERSE CODING 2.0</h1></div>
                 <div className="card-body">
                         <form action="" className="main">
                                 <div class="input-container head">
                                   <i class="fa fa-user icon"></i>
                        <input type="required" name="name" className="form-control fields" id="name" placeholder= "Username" value={name} onChange = {
                        (e) => setName(e.target.value)
                    }></input>
                    </div>
                <div>
                     <div class="input-container head1">
                          <i class="fa fa-envelope icon"></i>
                    <label htmlFor="email"></label>
                    <input class='fas fa-envelope-open' type="text" name="email" className="form-control fields" id="email" placeholder= "Email" value={email} onChange = {
                        (e) => setEmail(e.target.value)}></input>
                        </div>
                    </div>
             

                <div>
                     <div class="input-container head2">
                          
                          <i class="fa fa-key icon"></i>
                         
                    <label htmlFor="password"></label> 
                    <input type="password" name="password" className="form-control fields" id="password" placeholder= "Password"  autoComplete="off" value={password} 
                    onChange = {
                        (e) => setPassword(e.target.value)}></input>
                        </div>
                        </div>
                        
              
                <div class="form-grp">
                    <div className="radio">
                     {/* <Radio value="Junior" type="radio" checked={gender === "Junior"}  onChange={handleGender}/>Junior
                      <Radio value="Senior" type="radio" checked={gender === "Senior"}  onChange={handleGender}/>Senior */}
                      <MuiThemeProvider theme={theme}>
                          <div>
                            <Radio value="Junior" type="radio" checked={gender === "Junior"}  onChange={handleGender}/>Junior
                           <Radio value="Senior" type="radio" checked={gender === "Senior"}  onChange={handleGender}/>Senior
                         </div>
                         </MuiThemeProvider>
                    </div>
                   <button className="wid" type="btn" alt="button">Login</button>
                  </div>
                  
                 
            </form>
        </div> 
        </div>
        
        </div>
        </div>
        </div>

    )
}

export default User