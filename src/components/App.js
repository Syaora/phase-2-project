import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';
import {
  Link, Routes, Route
} from "react-router-dom";
import SearchPage from './SearchPage';
import UsersList from './UsersList';

function App() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <h1>MyWatchList</h1>
        <Link to="/">Home</Link>
        <Link to="myList">My List</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<SearchPage />} />
        <Route path="myList" element={<UsersList />} />
      </Routes>
    </div>
  );
}

export default App;
