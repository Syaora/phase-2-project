import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <SearchPage />
    </div>
  );
}

export default App;
