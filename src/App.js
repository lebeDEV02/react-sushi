import { Route } from 'react-router';
import React from "react";
import './App.css';
import {Header} from "./components"
import {Home, Cart} from './pages';
import { useSelector } from 'react-redux';
import EmptyCart from './components/EmptyCart';

function App() {
	const sushiItems = useSelector(({cart}) => cart.items)
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
       <Route path="/" exact component={Home}></Route>
       <Route path="/cart" exact component={Object.keys(sushiItems).length? Cart : EmptyCart}></Route>
      </div>
    </div>
  );
}


export default App;
