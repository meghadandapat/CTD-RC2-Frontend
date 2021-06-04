import './Login.css';
import React ,{useState}from 'react';

const Login = () => {
        const[name, setName] = useState("");
        const [password, setPassword] = useState("");
        const [isFound, setIsFound] = useState("User Found");
        const [isDuplicate, setIsDuplicate] = useState(false);

    return ( 

        <div className="login">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
            <div className="container" id="loginbg">
        
            <div className="card logincard">
                <div className="card-body">
               
                    <div className="wrapper">
                        <h2 className="logintitle typing-demo">Reverse Coding 2.0</h2>
                    </div>
                    <div>
                        <h5 className="found">{isFound}</h5>
                        {isDuplicate && <div class="alert alert-warning">
                            Duplicate User!
                        </div>}
                    </div>
                    <form className="loginform">
                        <div className="formField">
                            <div className="logo">
                                <i className="fa fa-user icon"></i>
                            </div>
                            <div className="formInput">
                                <input type="text" className="formip" placeholder="Username" name="name" value={name} onChange = {
                        (e) => setName(e.target.value)
                    } />
                            </div>
                        </div>
                        <div className="formField">
                            <div className="logo">
                                <i className="fas fa-unlock-alt"></i>
                            </div>
                            <div className="formInput">
                                <input type="password" className="formip" placeholder="Password" name="password" value={password} 
                    onChange = {
                        (e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="formRadio">
                            <input type="radio" value="junior" id="junior" name="category"/>
                            <label id="junior" htmlFor="junior">Junior</label>
                            <input type="radio" value="senior" id="senior" name="category"/>
                            <label id="senior" htmlFor="senior">Senior</label>
                        </div>
                        
                        <button className="btn loginbutton scanfcode" type="submit">
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
