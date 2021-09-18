import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router'
import Main from './views/Main';
import Create from './views/Create';
import SingleMedia from './views/SingleMedia';
import Edit from './views/Edit';


function App() {
  return (
  <div className="App">
    <Router>
      <Main path="/" />
      <Create path="/new" />
      <SingleMedia path="/:_id" />
      <Edit path="/:_id/edit" />
    </Router>
  </div>
  );
}

export default App;
