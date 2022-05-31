
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar';
import './App.css';
import Dashboard from './Components/Dashboard';
import { Switch,Route } from 'react-router-dom';
import Detail from './Components/Detail';
function App() {
  return (
        
          <div className="App">
            <NavBar />
            <div className="container">
              <Switch>
                <Route
                  path="/Details-poke/:id"
                  render={(props)=><Detail />}
                />
                <Route 
                  path="/"
                  render={(props)=><Dashboard />}
                />
              </Switch>
            </div>
          </div>
        
      
  );
}

export default App;
