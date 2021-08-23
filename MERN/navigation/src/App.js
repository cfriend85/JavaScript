import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Step from './components/Step';

function App() {

  const [steps, setSteps] = useState([
  ])

  const [form, setForm] = useState({
    direction: "Right", //this sets the default to be what the first option is(Right in this case) so that a blank string isn't submitted
    text: ""
  })

  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setSteps([...steps, form])
    document.forms['form'].reset()
  }

  return (
    <div className="App">
      <div>
          <form onSubmit={onSubmitHandler} name="form" className="form">
          <label>Direction:</label>
          <select onChange={onChangeHandler} name="direction" >
          <option value="Right">Right</option>
          <option value="Left">Left</option>
          <option value="Forward">Forward</option>
          </select><br></br>
          <label>On which(Rd, Ave, Blvd, St)</label>
          <input onChange={onChangeHandler} type="text" name="text" placeholder="On Kansas Ave."/><br></br>
          <input type="submit" value="Add step" className="btn btn-success"/>
          </form>
      </div>
      <div className="d-flex flex-wrap">
        {
      steps.map((item, i) => <Step key={i} direction={item.direction} text={item.text}/>)
        }
      </div>
    </div>
  );
}

export default App;
