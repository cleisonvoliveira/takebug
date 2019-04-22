import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import MenuSuperior from './components/menuSuperior/MenuSuperior';
import CadastroDefeito from './components/cadDefeito/CadastroDefeito';
import Home from './components/home/Home';
class App extends Component {
  render() {
    return (
      <div>
          <MenuSuperior/>
          <div className="container-fluid">
            <div className="row">
              <div className="col">
              <Switch>
                <Route exact path="/" />
                <Route path="/CadastroDefeito" component={CadastroDefeito}/>
                <Route path="/Home" component={Home}/>
              </Switch>
              </div>
            </div>
          </div>
      </div>
      
    )
  }  
}

export default App;
