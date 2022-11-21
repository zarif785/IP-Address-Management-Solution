import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import Create from './pages/Create';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login'; 
import axios from 'axios';


axios.defaults.baseURL='http://localhost:8000/';
axios.defaults.headers.post["Content-Type"]="application/json";
axios.defaults.headers.post["Accept"]="application/json "

function App() {
  return (
    <Router>
      <div className="App">
        
        {/* <div className="content"> */}
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path ='/create'>
              <Create/>
            </Route>
            <Route path ='/register'>
              <Register/>
            </Route>
            <Route path ='/login'>
              <Login/>
            </Route>
          </Switch>
          
          {/* <Test/> */}
        </div>
      {/* </div> */}
    </Router>
  );
}

export default App;
