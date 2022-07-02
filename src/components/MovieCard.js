import { Card, Col, Button } from 'react-bootstrap'

function MovieCard({ movie }) {
  return (
    <Col>
      <Card style={{ width: "18rem", height: "33.8125rem", "margin-bottom": "15px" }} >
        <Card.Img style={{ "min-height": "421px", "max-height": "421px"}} variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default MovieCard