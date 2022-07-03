import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

function MovieDetails({ movie }){
  const [movieDetails, setMovieDetails] = useState([])
  const params = useParams()

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${process.env.KEY}=${params.movieId}`)
      .then((res) => res.json())
      .then((data) => setMovieDetails(data))
  }, [])

  return (
    <Container className="mt-5">
      <h3>{movieDetails.Title}</h3>
      <Row>
        <Col xs="auto">
          <img src={movieDetails.Poster} />
        </Col>
        <Col xs="4" md="5" lg="7" xxl="auto">
          <ul style={{ "list-style": "none" }}>
            <li>Released: {movieDetails.Released}</li>
            <li>Runtime: {movieDetails.Runtime}</li>
            <li>Genre: {movieDetails.Genre}</li>
            <li>Director: {movieDetails.Director}</li>
            <li>Writers: {movieDetails.Writer}</li>
            <li>Actors: {movieDetails.Actors}</li>
            <li>Plot: <br />{movieDetails.Plot}</li>
          </ul>
        </Col>
      </Row>
    </Container>
    )
}

export default MovieDetails