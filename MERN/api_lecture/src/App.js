import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [breweries, setBreweries] = useState([])

  const getBreweryInfo = (event) => {
    axios.get("https://api.openbrewerydb.org/breweries") // a package that is installed and has an npm page
    .then(res => setBreweries(res.data))
    .catch(err => console.log(err))

    // fetch("https://api.openbrewerydb.org/breweries") // basic JS that you don't have to install or import
    //   .then(res => res.json())
    //   .then(res => setBreweries(res))
    //   .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <button className="btn btn-primary btn-lg mt-5" onClick={getBreweryInfo}>Go!</button>
      {
        breweries.map((item, i) => <h1 key={i}>{item.name}: {item.city}, {item.state}</h1>)
      }
    </div>
  );
}

export default App;
