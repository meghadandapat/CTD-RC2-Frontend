import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Submissions from './components/Submissions/Submissions';
import Testcase from './components/Testcase/Testcase';
import QuestionHub from './components/QuestionHub/QuestionHub';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Instructions from './components/Instructions/Instructions';
import Footer from './components/Footer/Footer';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Result from './components/Result/Result';
import Codingpage from './components/Coding/Codingpage';
import NotFound from './components/NotFound/NotFound';
import WebTeam from './components/WebTeam/WebTeam'


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/submissions" component={Submissions} />
    <Route path="/testcases" component={Testcase} />
    <Route path="/questionhub" component={QuestionHub} />
    <Route path="/instructions" component={Instructions} />
    <Route path="/leaderboard" component={Leaderboard} />
    <Route path="/result" component={Result} />
    <Route path="/coding" component={Codingpage} />
    <Route path="/webteam" component={WebTeam} />
    <Route component={NotFound} />
    </Switch>
    <Footer/>      
    </Router>
        
    </div>
  );
}

export default App;
