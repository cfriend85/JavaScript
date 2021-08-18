import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastName="Kent" firstName="Clark" age="500" hairColor="Black"/>

      <PersonCard lastName="Wayne" firstName="Bruce" age="30" hairColor="Black"/>

      <PersonCard lastName="Stark" firstName="Tony" age="32" hairColor="Black"/>

      <PersonCard lastName="Allen" firstName="Barry" age="22" hairColor="Blonde"/>
    </div>
  );
}

export default App;
