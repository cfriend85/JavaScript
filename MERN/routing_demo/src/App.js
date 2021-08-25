import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Main from './Views/Main';
import Aaron from './Views/Aaron';
import ManyMarquees from './Views/ManyMarquees';

function App() {
  return (
    <div className="App">
      <Router>
      <Main path="/" />
      <Aaron path="/aaron" />
      <ManyMarquees path="/many/:word" />
      </Router>
    </div>
  );
}

export default App;
