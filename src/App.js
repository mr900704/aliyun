import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Container from "./component/container/container";
import Homepage from "./component/homepage/homepage";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Container>
                <Route path="/" component={Homepage}></Route>
            </Container>

        </Switch>

      </Router>
    );
  }
}

export default App;
