import { Route } from 'react-router';
import React from "react";
import './App.css';
import {Header} from "./components"
import {Home, Cart} from './pages';
import axios from 'axios';
function App() {
	const [sushi, setSushi] = React.useState(null);
	React.useEffect(()=>{
		axios('http://localhost:3000/db.json')
		.then(({data})=>setSushi(data.sushi))
	},[]);
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
       <Route path="/" exact render={() => <Home sushi={sushi}></Home>}></Route>
       <Route path="/cart" exact component={Cart}></Route>
      </div>
    </div>
  );
}

export default App;
