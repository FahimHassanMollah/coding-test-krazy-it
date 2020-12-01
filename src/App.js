import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
       <Router>
      <div>
        

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/old-match">
            <Redirect to="/will-match" />
          </Route>
          <Route path="/will-match">
            <WillMatch />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route> */}
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
