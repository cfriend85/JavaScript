import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Home from './views/Home';
import Context from './views/Context';
import Colored from './views/Colored';


function App() {
  return (
    <div className="App">
      <Router>
      <Home path="/home"/>
      <Context path="/:word" />
      <Colored path="/:word/:text/:color" />
      </Router>
    </div>
  );
}

export default App;
