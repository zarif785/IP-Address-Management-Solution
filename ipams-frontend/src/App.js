import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import Create from './pages/Create';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login'; 
import axios from 'axios';
import UserIP from './pages/UserIP';
import Edit from './pages/Edit';
import UserLog from './pages/UserLog';


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
            <Route path ='/show'>
              <UserIP/>
            </Route>
            <Route path = "/edit/:id">
              <Edit/>
            </Route>
            <Route path = "/log">
              <UserLog/>
            </Route>
          </Switch>
          
          {/* <Test/> */}
        </div>
      {/* </div> */}
    </Router>
  );
}

export default App;
