
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar';
import './App.css';
import Dashboard from './Components/Dashboard';
function App() {
  return (
      <div className="App">
        <NavBar />
        <div className='container'>
          <Dashboard/>
        </div>
      </div>
  );
}

export default App;
