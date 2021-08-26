import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
    
  const [resources, setResources] = useState([]);
  const [resource, setResource] = useState([])
  const [num, setNum] = useState("")

  useEffect(() => {
    axios.get("https://swapi.dev/api/")
    .then(res => setResources(res.data))
    .catch(err => console.log(err))
  }, [])

  const getInfo = (event) => {
    event.preventDefault();
    axios.get(`https://swapi.dev/api/${resource}/${num}`)
    .then(res => setResources(res.data))
    .catch(err => console.log(err))
  }

  const onChangeHandler = (event) => {
    event.preventDefault();
    setResource(event.target.value)
  }

  return (
    <div className="App">
      Search For: <select onChange={onChangeHandler}>
        {
          Object.keys(resources).map((item, i) => <option key={i} value={[item]}>{[item]}</option>)
        }
      </select>
      ID: <input type="text" onChange={(event) => setNum(event.target.value)}/>
      <button className="btn btn-primary btn-lg" onClick={getInfo}>Search</button>
    </div>
  );
}

export default App;
