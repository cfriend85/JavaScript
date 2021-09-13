import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router'
import Main from './views/Main';
import Create from './views/Create';


function App() {
  return (
  <div className="App">
    <Router>
      <Main path="/" />
      <Create path="/new" />
    </Router>
  </div>
  );
}

export default App;
