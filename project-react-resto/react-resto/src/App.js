import Nav from './Front/Nav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Front from './Front/Front';
import Back from './Back/Back';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <Route path="/" component={Front} exact />
        <Route path="/home" component={Front} exact />
        <Route path="/admin" component={Back}/>
      </Router>
    </div>
  );
}
export default App;
