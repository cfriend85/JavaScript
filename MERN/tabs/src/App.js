import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Tab from './components/Tab';

function App() {

  const [tabs, setTabs] = useState([
    {label: "Tab1", content: "These kids have lost their minds!", selected:false},
    {label: "Tab2", content: "Bedtime!", selected:false},
    {label: "Tab3", content: "TIME FOR WINE!!!!", selected:true}
  ])

  const onClickHandler = (selectedIndex) => {

    tabs.map((tab, i) => {
      let t = tab
      if(i === selectedIndex){
        t.selected = true
      }
      else{
        t.selected = false
      }
      setTabs([...tabs.slice(0,i), t, ...tabs.slice(i+1)]) //spread everything before the thing we're looking for and include it's new value and then add everything after
      // setTabs([...tabs.slice(0,selectedIndex),...tabs.slice(selectedIndex+1)]) This is how you could delete the thing, by creating a new array of everything before it and after it without including it.
    })
  }

  return (
    <div className="App">
      <div className="d-flex justify-content-center">
      {
      tabs.map((item, i) => <Tab key={i} label={item.label} selected={item.selected} content={item.content} index={i} onClickHandler={onClickHandler}/>)
      }
      </div>

      {
      tabs.map((item, i) => {
        if(item.selected){
          return <div>{item.content}</div>
        }
        else{
          return null;
        }
      })
      }
    </div>
  );
}

export default App;
