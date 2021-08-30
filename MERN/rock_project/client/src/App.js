import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router'
import Main from './views/Main';
import Edit from './views/Edit'

function App() {
    return(
        <div>
            <Router>
            <Main path="/"/>
            <Edit path="/edit/rock/:id"/>
            </Router>
        </div>
    )

}

export default App;
