import Card from 'react-bootstrap/Card'

function MovieCard({ movie }) {
  return (
    <Card>
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default MovieCard