import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Test from './pages/Test';
function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <div className="content">
          <Home/>
          {/* <Test/> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
