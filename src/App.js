import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import About from './components/About/About';
import Protfolio from './components/Protfolio/Protfolio';
import Pricing from './components/Pricing/Pricing';
import MultipleImagePreview from './components/MultipleImagePreview/MultipleImagePreview';
import TShirt from './components/TShirt/TShirt';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
       <Router>
      <div>
        

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/about">
           <About></About>
          </Route>
          <Route path="/protfolio">
           <Protfolio></Protfolio>
          </Route>
          <Route path="/pricing">
           <Pricing></Pricing>
          </Route>
          <Route path="/imagePreview">
            <MultipleImagePreview></MultipleImagePreview>
          </Route>
          <Route path="/tshirt">
            <TShirt></TShirt>
          </Route>
          <Route path="/ordernow">
            <Contact></Contact>
          </Route>
          {/* <Route path="*">
            <NoMatch />
          </Route> */}
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
