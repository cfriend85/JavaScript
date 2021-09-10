import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router'
import Main from './views/Main';


function App() {
  return (
  <div className="App">
    <Router>
      <Main path="/" />
    </Router>
  </div>
  );
}

export default App;
