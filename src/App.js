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
import PrivateRoute from './components/utils/PrivateRoute';
import PublicRoute from './components/utils/PublicRoute';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Switch>
    <PublicRoute restricted={false} exact path="/" component={Login} />
    <PrivateRoute exact path="/submissions" component={Submissions} />
    <PrivateRoute exact path="/testcases" component={Testcase} />
    <PrivateRoute exact path="/questionhub" component={QuestionHub} />
    <PrivateRoute exact path="/instructions" component={Instructions} />
    <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
    <PublicRoute restricted={false} exact path="/result" component={Result} />
    <PrivateRoute exact path="/coding" component={Codingpage} />
    </Switch>      
    </Router>
    <Footer/>    
    </div>
  );
}

export default App;
