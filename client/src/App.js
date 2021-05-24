import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import Add from './views/Add';

function App() {
  return (
    <div className="App container">
      <h1 className = "text-success border-bottom border-success m-3 pb-3">Project Manager</h1>
      <Router>
      <Main path = "/"/>
      <Add path = "/projects/new"/>
      </Router>
    </div>
  );
}

export default App;
