import MovieCard from "./MovieCard"

function MovieResults({ moviesList }){
  return (
    <>
      {
        moviesList.map((movie) => {
          return <MovieCard key={movie.imdbID} movie={movie} /> 
        })
      }
    </>
  )
}

export default MovieResults