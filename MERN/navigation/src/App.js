import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Step from './components/Step';

function App() {

  const [steps, setSteps] = useState([
    {direction: "Right", text:"On Peoria St"},
    {direction: "Left", text:"On Parker Rd"},
    {direction: "Forward", text:"On CO 83"},
    {direction: "Right", text:"On Arapahoe Rd"}
  ])

  return (
    <div className="App">
      <div className="d-flex flex-wrap">
        {
      steps.map((item, i) => <Step key={i} direction={item.direction} text={item.text}/>)
        }
      </div>
    </div>
  );
}

export default App;
