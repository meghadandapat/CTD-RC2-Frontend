// React

import React, { useState }from 'react';
import { useHistory } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';

// Material UI

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Local Imports

import axiosInstance from '../../axios';
import { login } from '../utils';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ffc371' }, 
    secondary: { main: '#ffc371' }, 
  },
});

const User = () => {
    const history = useHistory();

    const initialFormData = Object.freeze({
      username: '',
      password: '',
    });

    const [gender,setGender] = useState("Senior");
    const handleGender=(e)=>{
        console.warn(e.target.value)
        setGender(e.target.value)

    }

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
                login(res);
                axiosInstance.defaults.headers['Authorization'] =
                      'JWT ' + localStorage.getItem('access_token');
                history.push('/instructions');
                console.log(res.status);
              });
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
                        <input type="required" name="username" className="form-control fields" id="username" placeholder= "Username" onChange = { handleChange }></input>
                    </div>
                <div>
                    </div>
                <div>
                     <div class="input-container head2">
                          
                          <i class="fa fa-key icon"></i>
                         
                    <label htmlFor="password"></label> 
                    <input type="password" name="password" className="form-control fields" id="password" placeholder= "Password"  autoComplete="off" 
                    onChange = { handleChange }></input>
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
                   <button className="wid" type="btn" alt="button" onClick={ handleSubmit }>Login</button>
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