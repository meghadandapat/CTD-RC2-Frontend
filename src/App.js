import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Submissions from './components/Submissions/Submissions';
import Testcase from './components/Testcase/Testcase';
import QuestionHub from './components/QuestionHub/QuestionHub';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Route exact path="/" component={Login} />
    <Route path="/submissions" component={Submissions} />
    <Route path="/testcases" component={Testcase} />
    <Route path="/questionhub" component={QuestionHub} />
  
  </Router>   
    </div>
  );
}

export default App;
