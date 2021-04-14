import ReactDOM from 'react-dom';
import  './Login.css';
 const Login =() =>
{
    return (
        <section>
            <br></br>
            <form>
                <table border="1" align="center" width="30%" height="120%">
                    <h2>Welcome!</h2>
                Username:  <input type="text" name="Username" placeholder="USERNAME" required></input><br></br><br></br>
                Password:  <input type="password" name="Username" placeholder="PASSWORD" required></input><br></br><br></br>
                Email:     <input type="text" name="Username" placeholder="EMAILID" required></input><br></br><br></br> 

                 <b>-Select Category-</b><br></br><br></br>
                <input type="radio" name="Category"/>Junior &nbsp;&nbsp;
            <input type="radio" name="Category"/>Senior
            <br></br>
            <br></br>
             <button style={{padding:'0.5rem', height:'5vh'}}>
                 <a href="#" role="button"><b>Submit</b></a>
                 </button>
                 </table>
                 </form>

                 <br></br><br></br>
                 <footer className="footer">
                 <span className="footer__date">
                  {`© PICT IEEE STUDENT BRANCH ${new Date().getFullYear()}`}
              </span>
               </footer>
        </section>
    )
}
export default Login;