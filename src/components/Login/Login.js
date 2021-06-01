import './Login.css';
import React ,{useState}from 'react';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../axios';
import { login } from '../utils/index';



const Login = () => {

    const history = useHistory();

    const initialFormData = Object.freeze({
        username: '',
        password: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axiosInstance
                .post('/api/token/', {
                    username: formData.username,
                    password: formData.password,
                })
                .then((res) => {
                    localStorage.setItem('access_token', res.data.access);
				    localStorage.setItem('refresh_token', res.data.refresh);
                    axiosInstance.defaults.headers['Authorization'] = 
                            'JWT ' + localStorage.getItem('access_token');
                    history.push('/instructions');
                    console.log(res.status);
                });

    };

    return ( 

        <div className="login">
          <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
            <div className="container" id="loginbg">
        
            <div className="card logincard">
                <div className="card-body">
                    {/* <h2 className="btn-shine logintitle" target="_blank">Reverse Coding 2.0</h2> */}
                    <div className="wrapper">
                        <h2 className="logintitle typing-demo">Reverse Coding 2.0</h2>
                    </div>
                    <form className="loginform">
                        <div className="formField">
                            <div className="logo">
                                <i class="fa fa-user icon"></i>
                            </div>
                            <div className="formInput">
                                <input type="text" name='username' className="formip" placeholder="Username" id="username" onChange = {handleChange} />
                            </div>
                        </div>
                        <div className="formField">
                            <div className="logo">
                                <i class="fas fa-unlock-alt"></i>
                            </div>
                            <div className="formInput">
                                <input type="password" name='password' className="formip" placeholder="Password" id="password" onChange = {handleChange} />
                            </div>
                        </div>
                        <div className="formRadio">
                            <input type="radio" value="junior" id="junior" name="category"/>
                            <label id="junior" htmlFor="junior">Junior</label>
                            <input type="radio" value="senior" id="senior" name="category"/>
                            <label id="senior" htmlFor="senior">Senior</label>
                        </div>
                        
                        <button className="btn loginbutton" type="submit" onClick={ handleSubmit }>
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
