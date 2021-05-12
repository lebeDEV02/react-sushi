import { Route } from 'react-router';
import './App.css';
import {Header} from "./components"
import {Home, Cart} from './pages';
function App() {
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
