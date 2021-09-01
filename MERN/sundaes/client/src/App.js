import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router'
import Main from './views/Main';
import Edit from './views/Edit';

function App() {
  return(
  <Router>
    <Main path="/" />
    <Edit path="/edit/:_id" />
  </Router>
  )
}

export default App;
