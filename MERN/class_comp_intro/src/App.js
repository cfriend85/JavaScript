import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCard from './components/PersonCard'

function App() {
  
  return (
    <div className="App text-center p-5">
    <PersonCard lName="Friend" fName="Charles" age="36" hair="Red"/>

    <PersonCard lName="Friend" fName="Mark" age="64" hair="None"/>

    <PersonCard lName="Friend" fName="Wyatt" age="4" hair="Blonde"/>
    
    <PersonCard lName="Friend" fName="Nathan" age="36" hair="Red"/>
    </div>
  );
}

export default App;
