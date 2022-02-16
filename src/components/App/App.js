import './/App.css';
import Navbar from '../Navbar/Navbar';
import Planner from '../Calendar/Planner';
import Inventory from '../Inventory/Inventory';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path='/planner'>
            <Planner></Planner>
          </Route>

          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
