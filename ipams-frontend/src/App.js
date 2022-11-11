import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Test from './pages/Test';
// import Create from './pages/Create';
function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path ='/create'>
              <Test/>
            </Route>
          </Switch>
          
          {/* <Test/> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
