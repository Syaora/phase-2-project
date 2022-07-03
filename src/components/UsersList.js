import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import MovieCard from "./MovieCard"

function UsersList({ watchList }) {
  return (
    <>
      <Container className="mt-4">
        <h2>Plan to Watch</h2>
        <Row>
          {
            watchList.filter((movie) => movie.status === "Plan")
              .map((movie) => <MovieCard key={movie.imdbID} movie={movie} watchList={watchList} />)
          }
        </Row>
        <h2>Completed</h2>
        <Row>
          {
            watchList.filter((movie) => movie.status === "Completed")
              .map((movie) => <MovieCard key={movie.imdbID} movie={movie} watchList={watchList} />)
          }
        </Row>
      </Container>
    </>
  )
}

export default UsersList