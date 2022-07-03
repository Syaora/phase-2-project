import { Card, Col, Button } from 'react-bootstrap'

function MovieCard({ movie }) {
  return (
    <Col>
      <Card style={{ width: "18rem", height: "35.8125rem", marginBottom: "15px" }} className="text-center">
        <Card.Img style={{ minHeight: "421px", maxHeight: "421px"}} variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
            <Button href={`/${movie.imdbID}`} variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default MovieCard