import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCard from './components/PersonCard'

function App() {
  
  return (
    <div className="App text-center p-5">
    <PersonCard lName="Friend" fName="Charles" age="36" hair="Red" likes={10}/>

    <PersonCard lName="Friend" fName="Mark" age="64" hair="None" likes={500}/>

    <PersonCard lName="Friend" fName="Wyatt" age="4" hair="Blonde" likes={1000}/>
    
    <PersonCard lName="Friend" fName="Nathan" age="36" hair="Red" likes={-25}/>
    </div>
  );
}

export default App;
