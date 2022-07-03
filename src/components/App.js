import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';
import {
  Routes, Route
} from "react-router-dom";
import SearchPage from './SearchPage';
import UsersList from './UsersList';
import MovieDetails from './MovieDetails';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'

function App() {
  const [watchList, setWatchList] = useState([])

  // //Keeps track if new user or returning user (future feature?)
  // const initialUser = () => window.localStorage.getItem('user') || nanoid()
  // const [user, setUser] = useState(initialUser)
  // useEffect(() => {
  //   window.localStorage.setItem('user', user)
  // }, [])

  useEffect(() => {
    fetch(`http://localhost:8000/Bob/`)
      .then((res) => res.json())
      .then((data) => setWatchList(data))
  }, [])

  function onStatusChange(movie, status) {
    const newData = {...movie, "id": movie.imdbID, "status": status}
    console.log("test", newData)

    fetch(`http://localhost:8000/Bob/${movie.imdbID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MyWatchList</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/myList">My List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<SearchPage />} />
        <Route path="/:movieId" element={<MovieDetails watchList={watchList} onStatusChange={onStatusChange} />} />
        <Route path="myList" element={<UsersList watchList={watchList} />} />
      </Routes>
    </div>
  );
}

export default App;
