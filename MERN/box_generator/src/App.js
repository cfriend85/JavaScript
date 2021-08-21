import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './components/Box';

function App() {

  const [boxes, setBoxes] = useState([]);
    
  const [form, setForm] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setBoxes([...boxes, form]);
    document.forms['color_pick'].reset()
}

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler} name="color_pick">
      <label for="color">Color</label><br></br>
      <input type="text" name="color" onChange={(event) => setForm(event.target.value)}/>
      <input type="submit" value="Add"/>
      </form><br></br>
      <div className="boxes d-flex flex-wrap">
      {
        boxes.map((box, i) => <Box key={i} text={box}/>)
      }
      </div>
    </div>
  );
}

export default App;
