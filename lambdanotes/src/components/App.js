import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SideBar from './SideBar';
import NoteView from './NoteView';
import CreateNew from './CreateNew';
import Notes from './Notes';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      note: ''
    };
  }
  render() {
    return (
      <Router>
      <div className="App">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="note-view">
        {/* <Router>  */}
        <Switch> 
          <Route path='/viewcards' component={NoteView}
          />
          <Route path='/createcards' 
          component={CreateNew}
          />
        </Switch>
        </div>
      </div>
        </Router>
          
       
    );
  }
}

export default App;
