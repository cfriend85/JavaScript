import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostBlock from './components/PostBlock'

function App() {
  
  return (
    <div className="App text-center p-5">
    <PostBlock text="Howdy!" fName="Charles" likes="10000" rt="1000"/>

    <PostBlock text="Bond, James Bond" fName="James" likes="1000000" rt="50000"/>

    <PostBlock text="I'm Batman" fName="Batman" likes="1" rt="1"/>

    <PostBlock text="UBR?" fName="Mark" likes="10" rt="5"/>
    
    <PostBlock text="Go to jail, directly to jail. Do not pass go, do not collect $200" fName="Uncle Pennybags" likes="100000000" rt="500000"/>
    </div>
  );
}

export default App;
