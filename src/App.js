import './App.css';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/signin' render={(props) => <SignIn {...props}></SignIn>} />
          <Route exact path='/signup' render={(props) => <SignUp {...props}></SignUp>} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
