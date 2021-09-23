import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

function App() {
  const [socket] = useState(() => io(':8000'))
  const [input, setInput] = useState("");
  const [words, setWords] = useState([]);

  useEffect(() => {
    console.log('is this thing on????');
    socket.on('post word', newWord => {
      setWords(prevwords => {return [...prevwords, newWord]})
    })
    return () => socket.disconnect(true); //this disconnects unmounted components
  }, [socket])

  const onChangeHandler = (event) => {
    setInput(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    socket.emit('word', input)
  }
  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <input type="text" name="msg" autoComplete="off" onChange={onChangeHandler}/>
        <input type="submit" value="Submit" />
      </form>

      <div>
        {
          words.map((word, i) => {
          return <h1 key={i}>{word}</h1>
        })
        }
      </div>
    </div>
  );
}

export default App;
