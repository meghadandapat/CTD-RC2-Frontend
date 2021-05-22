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
    <div className="login-root">
     <div className="box-root flex-flex flex-direction--column" style={{minheight: "100vh",flexgrow: "1"}}>
      <div className="loginbackground box-background--white padding-top--64">
        <div className="loginbackground-gridContainer">
          <div className="box-root flex-flex" style={{gridarea: "top / start / 8 / end"}}>
            <div className="box-root" style={{backgroundimage: "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",flexgrow: "1"}}>
            </div>
          </div>
          <div className="box-root flex-flex" style={{gridarea: "4 / 2 / auto / 5"}}>
            <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{flexgrow: "1"}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridarea: "6 / start / auto / 2"}}>
            <div className="box-root box-background--blue800" style={{flexgrow: "1"}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridarea: "7 / start / auto / 4"}}>
            <div className="box-root box-background--blue animationLeftRight" style={{flexgrow: "1"}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridarea: "8 / 4 / auto / 6"}}>
            <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{flexgrow: "1"}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridarea: "2 / 15 / auto / end"}}>
            <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{flexgrow: "1"}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridarea: "3 / 14 / auto / end"}}>
            <div className="box-root box-background--blue animationRightLeft" style={{flexgrow: "1"}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridarea: "4 / 17 / auto / 20"}}>
            <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{flexgrow: "1"}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridarea: "5 / 14 / auto / 17"}}>
            <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{flexgrow: "1"}}></div>
          </div>
        </div>
      </div> 
      <div className="box-root padding-top--24 flex-flex" style={{flexgrow: "1", zindex: "9"}}>
        {/* <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1><a href="http://blogs.stackfindover.com/" rel="dofollow">Reverse Coding Round 2.0</a></h1>
        </div> */}
        <div className="formbg-outer">
          <div className="formbg">
            <div className="formbg-inner padding-horizontal--48">
              <marquee><span className="padding-bottom--15">Reverse Coding Round 2.0</span></marquee>
              <form className="stripe-login">
                <div className="field padding-bottom--24">
                  <label htmlFor="email">Username</label>
                   <input type="required" name="name" className="form-control fields" id="name" placeholder= "Username" value={name} onChange = {
                        (e) => setName(e.target.value)
                    }></input>
                    </div>
                <div className="field padding-bottom--24">
                  {/* <div className="grid--50-50"> */}
                    <label htmlFor="password">Password</label>
                  {/* <input type="password" name="password"></input> */}
                  <input type="password" name="password" className="form-control fields" id="password" placeholder= "Password"  autoComplete="off" value={password} 
                    onChange = {
                        (e) => setPassword(e.target.value)}></input>
                        </div>
                      {/* </div> */}
               <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
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
                  </div>
                </div> 
                <div className="field padding-bottom--24">
                  <input type="submit" name="submit" value="Login"></input>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  </div>
  </div>
 
   )
}

export default User