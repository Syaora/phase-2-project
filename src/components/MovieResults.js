import MovieCard from "./MovieCard"
import Row from "react-bootstrap/Row"
import Container from 'react-bootstrap/Container'

function MovieResults({ moviesList }) {
  return (
    <Container>
      <Row sm={3} md="auto">
        {
          moviesList.map((movie) => {
            return <MovieCard key={movie.imdbID} movie={movie} />
          })
        }
      </Row>
    </Container>
  )
}

export default MovieResults