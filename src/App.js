import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Table from './component/Table/Table';
import Task2 from './component/Task2/Task2';
import Task3 from './component/AxioTask/Task3';
import {Button} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <div style={{display: 'flex', justifyContent:'space-evenly', alignItems:'center', padding:'10px', margin:'10px'}}>
        <Button color="primary" variant="contained" href="/table">Task 1</Button>
        <Button color="primary" variant="contained" href="/task2">Task 2</Button>
        <Button color="primary" variant="contained" href="/task3">Task 3</Button>
        </div>
      <Router>
        <Route path="/task3" component={Task3}/>
        <Route path="/task2" component={Task2}/>
        <Route path="/table" component={Table}></Route>
      </Router>
    </div>
  );
}

export default (App);
