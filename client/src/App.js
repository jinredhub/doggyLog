import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Start from './pages/Start/Start';
import BasicInfo from './pages/BasicInfo/BasicInfo';
import Behavioral from './pages/Behavioral/Behavioral';
import Result from './pages/Result/Result';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route path='/' exact component={Home}/>
                <Route path='/start' exact component={Start}/>
                <Route path='/basic-info' exact component={BasicInfo}/>
                <Route path='/behavioral' exact component={Behavioral}/>
                <Route path='/result' exact component={Result}/>              
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
