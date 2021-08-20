import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  // const [ingredients, setIngredients] = useState(["Bread", "Mustard", "Pickles", "Turkey", "Cheese", "Pepperoni"]);
  const [ingredients, setIngredients] = useState([]);
  const [form, setForm] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIngredients([...ingredients, form])
  }


  return (
    <div className="App">
      <h1>Sandwich Builder!</h1>
      <h3>Ingredients:</h3>
      <form onSubmit={onSubmitHandler}>
      <div className="form-group col-5 mx-auto center">
        <input className="form-control" type="text" placeholder="Enter Ingredient" onChange={(event) => setForm(event.target.value)}/><br></br>
        <input type="submit" className="btn btn-success" value="Add Ingredient" />
      </div>
      </form><br></br>
      <ul>
        {
          ingredients.map((ingredient, i) => <p key={i}>{i + 1}: {ingredient}</p>)
        }
      </ul>
    </div>
  );
}

export default App;
