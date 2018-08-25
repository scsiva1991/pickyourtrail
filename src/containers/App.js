import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Question1 from '../components/Question1';
import Question2 from '../components/Question2';
import Question3 from '../components/Question3';

class App extends Component {

  render() {
    console.log(this.props);
    return (
      <Router>
        <div> 
          <Route exact path="/" component={Question1} />
          <Route exact path="/question2" component={Question2} />
          <Route exact path="/question3" component={Question3} />

          <div className="links mg-t-50">
            <Link className="route" to="/">Question 1</Link>
            <Link className="route" to="/question2">Question 2</Link>
            <Link className="route" to="/question3">Question 3</Link>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
