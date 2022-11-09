import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <div className="content">
          <Home/>
        </div>
      </div>
    </Router>
  );
}

export default App;
