import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

function MovieDetails({ watchList, onStatusChange }){
  const [status, setStatus] = useState("None")
  const [movieDetails, setMovieDetails] = useState([])
  const params = useParams()

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_SECRET}&i=${params.movieId}&plot=full`)
      .then((res) => res.json())
      .then((data) => setMovieDetails(data))
  }, [])

  function handleStatusChange(event){
    const newValue = event.target.value
    setStatus(newValue)
    
    if (newValue !== "None"){
      onStatusChange(movieDetails, newValue)
    }
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col xs="auto">
          <img src={movieDetails.Poster} />
        </Col>
        <Col xs="4" md="5" lg="7">
          <h2>{movieDetails.Title}</h2>
          <hr />
          <p><b>Status: </b>
            <select onChange={handleStatusChange} name="status">
              <option value="None">Add to List</option>
              <option value="Completed">Completed</option>
              <option value="Plan">Plan to Watch</option>
            </select>
          <br />
          <b>Released</b>: {movieDetails.Released}<br />
          <b>Runtime</b>: {movieDetails.Runtime}<br />
          <b>Genre</b>: {movieDetails.Genre}<br />
          <b>Director</b>: {movieDetails.Director}<br />
          <b>Writers</b>: {movieDetails.Writer}<br />
          <b>Actors</b>: {movieDetails.Actors}<br />
          <b>Plot</b>: {movieDetails.Plot}</p>
        </Col>
      </Row>
    </Container>
    )
}

export default MovieDetails