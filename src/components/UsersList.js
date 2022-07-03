import Container from "react-bootstrap/Container"
import MovieCard from "./MovieCard"

function UsersList({ watchList }){
  return (
    <>
      <Container className="mt-4">
        <h2>Plan to Watch</h2>
        {
          watchList.filter((movie) => movie.status === "Plan")
            .map((movie) => <MovieCard key={movie.imdbID} movie={movie} watchList={watchList} />)
        }
        <h2>Completed</h2>
        {
          watchList.filter((movie) => movie.status === "Completed")
            .map((movie) => <MovieCard key={movie.imdbID} movie={movie} watchList={watchList} />)
        }
      </Container>
    </>
  )
}

export default UsersList