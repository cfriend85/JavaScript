import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Main from './Views/Main';
import Aaron from './Views/Aaron';

function App() {
  return (
    <div className="App">
      <Router>
      <Main path="/" />
      <Aaron path="/aaron" />
      </Router>
    </div>
  );
}

export default App;
