import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import { Router } from '@reach/router';
import { useState, useEffect } from 'react';

function App() {

  const [rocks, setRocks] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/rocks")
      .then(res => setRocks(res.data.rocks))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <h1>Full stack time!</h1>
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Color</th>
                <th>Feel</th>
                <th>Weight</th>
                <th>Date Found</th>
              </tr>
            </thead>
            <tbody>
            {
              rocks.map((item, i) => {
                return <tr key={i}>
                  <td className="table-light">{item.name}</td>
                  <td className="table-light">{item.color}</td>
                  <td className="table-light">{item.feel}</td>
                  <td className="table-light">{item.weight}</td>
                  <td className="table-light">{item.foundDate}</td>
                </tr>
              })
            }
            </tbody>
        </table>
    </div>
  );
}

export default App;
