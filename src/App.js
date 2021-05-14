import { Route } from 'react-router';
import React from "react";
import './App.css';
import {Header} from "./components"
import {Home, Cart} from './pages';
import axios from 'axios';
import {setSushi} from "./redux/actions/sushi"
import {useDispatch} from "react-redux";

function App() {
	const dispatch = useDispatch();

	React.useEffect(()=>{
		axios('http://localhost:3000/db.json')
		.then(({data})=>{
			dispatch(setSushi(data.sushi))
		})
	},[]);
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
       <Route path="/" exact component={Home}></Route>
       <Route path="/cart" exact component={Cart}></Route>
      </div>
    </div>
  );
}


export default App;
