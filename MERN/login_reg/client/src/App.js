import './App.css';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <SignIn path='/' />
        <Dashboard path='/dashboard' />
      </Router>
    </div>
  );
}

export default App;
