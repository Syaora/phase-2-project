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

  //Keeps track if new user or returning user
  const initialUser = () => window.localStorage.getItem('user') || nanoid()
  const [user, setUser] = useState(initialUser)

  useEffect(()=> {
    window.localStorage.setItem('user', user)
    console.log("testing")
  } , [])

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">{user}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/myList">My List</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
      <Routes>
        <Route exact path="/" element={<SearchPage />} />
        <Route path="/:movieId" element={<MovieDetails />} />
        <Route path="myList" element={<UsersList />} />
      </Routes>
    </div>
  );
}

export default App;
