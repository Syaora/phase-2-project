import SearchBar from "./Searchbar"
import { useState } from "react"
import MovieResults from "./MovieResults"
import Container from "react-bootstrap/Container"

function SearchPage() {
  const [moviesList, setMoviesList] = useState([])

  function onMoviesList(keyword) {
    fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_SECRET}&s=${keyword}&type=movie`)
      .then((res) => res.json())
      .then((data) => setMoviesList(data.Search))
  }

  return (
    <>
      <Container>
        <SearchBar onMoviesList={onMoviesList} />
        <MovieResults moviesList={moviesList} />
      </Container>
    </>
  )
}

export default SearchPage