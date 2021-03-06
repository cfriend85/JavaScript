import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassTime from './components/ClassTime';
import FunctionalTime from './components/FunctionalTime';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <ClassTime message="Hiya!"/>
      <ClassTime message="Back at ya!"/>
      
      
      
      <FunctionalTime message="Hiya buddy!" subMessage="Hey there pal!"/>
      <Form />
    </div>
  );
}

export default App;
