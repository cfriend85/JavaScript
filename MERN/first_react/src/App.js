import './App.css';
import Card from './components/Card';

function App() {
  const myStyle = {
    "backgroundColor": "blue",
    "color": "white"
  }
  const faveGames = [{game: "MLB The Show", year: 2006}, {game: "Destiny", year: 2014}, {game: "Call of Duty-Online", year: 2008}, {game: "Phase 10", year: 1982}, {game: "SkipBo", year: 1967}]
  const sameFaveGames = [{game: "MLB The Show", year: 2006}, {game: "Destiny", year: 2014}, {game: "Call of Duty-Online", year: 2008}, {game: "Phase 10", year: 1982}, {game: "SkipBo", year: 1967}]
  const chilrens = [{firstName: "Wyatt", age: 4}, {firstName: "Emma", age: 10}]
  return (
    <> 
    <div className="App">
      <h1 className="myStyle">These are my Favorite Games!</h1> {/* Uses the className to style this using the App.css file*/}
      
      {/*This is how you iteate over and display. Multiple ways to display the data, two examples below*/}

      {
        faveGames.map(game => <li>{game.game}: {game.year}</li>) 
      }
      {
        sameFaveGames.map(thing => {
          return <h1>{thing.game}: {thing.year}</h1>
        })
      }
      <h1 style={myStyle}>My Kids:</h1>
      {
        chilrens.map(kid => {
          return <h1>{kid.firstName} Age: {kid.age}</h1>
        })
      }
      <h3 style={myStyle}>This is so cool!</h3> {/* Uses the const variable to style this in line*/}

      <Card />

    </div>
    </>
  );
}

export default App;
