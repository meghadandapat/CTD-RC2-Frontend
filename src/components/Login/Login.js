import './Login.css';
import React ,{useState}from 'react';
import { Button } from 'react-bootstrap';
const Login = () => {
        const[name, setName] = useState("");
        const [password, setPassword] = useState("");
        
        // VANTA.WAVES({
        //     el: "#loginbg",
        //     mouseControls: true,
        //     touchControls: true,
        //     gyroControls: false,
        //     minHeight: 200.00,
        //     minWidth: 200.00,
        //     scale: 1.00,
        //     scaleMobile: 1.00,
        //     color: 0x103351
        //     })
        
    return ( 

        <div className="login">
          <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
            <div className="container" id="loginbg">
        
            <div className="card logincard">
                <div className="card-body">
                    {/* <h2 className="btn-shine logintitle" target="_blank">Reverse Coding 2.0</h2> */}
                    <div class="wrapper">
                        <h2 className="logintitle typing-demo">Reverse Coding 2.0</h2>
                    </div>
                    <form className="loginform">
                        <div className="formField">
                            <div className="logo">
                                <i class="fa fa-user icon"></i>
                            </div>
                            <div className="formInput">
                                <input type="text" className="formip" placeholder="Username" name="name" value={name} onChange = {
                        (e) => setName(e.target.value)
                    } />
                            </div>
                        </div>
                        <div className="formField">
                            <div className="logo">
                                <i class="fas fa-unlock-alt"></i>
                            </div>
                            <div className="formInput">
                                <input type="password" className="formip" placeholder="Password" name="password" value={password} 
                    onChange = {
                        (e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="formRadio">
                            <input type="radio" value="junior" id="junior" name="category"/>
                            <label id="junior" for="junior">Junior</label>
                            <input type="radio" value="senior" id="senior" name="category"/>
                            <label id="senior" for="senior">Senior</label>
                        </div>
                        
                        <button className="btn loginbutton" type="submit">
        <span>Login</span>
      </button>
      
                    </form>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Login;
