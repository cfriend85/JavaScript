import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Arena from './components/Arena';
import Car from './components/Car'

function App() {
  return (
  <>
    <div className="App">
      <Arena>
      <Car carName="JS Thrasher" color="limegreen" picture="https://www.gcdailyworld.com/photos/11/60/34/1160344-L.jpg"/>
      <Car carName="Ruby Rider" color="red" picture="https://bloximages.chicago2.vip.townnews.com/championnewspapers.com/content/tncms/assets/v3/editorial/5/e7/5e7faed6-8154-11e8-9211-ff922b21cd46/5b3fc5c0c139d.image.jpg"/>


      </Arena>
    </div>
  </>
  );
}

export default App;
