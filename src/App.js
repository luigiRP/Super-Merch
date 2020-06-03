import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Switch,Route} from 'react-router-dom';
import Bar from './components/Bar';
import Cart from './components/CartFolder';
import Products from './components/Products';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      <Bar></Bar>
      <Switch>
        <Route path="/" exact component={Products}/>
        <Route path="/details" exact  component={Details}/>
        <Route path="/cart" exact component={Cart}/>
        <Route path="*" exact component={Default}/>
      </Switch>
      <Modal></Modal>
    </React.Fragment>
  );
};

export default App;
