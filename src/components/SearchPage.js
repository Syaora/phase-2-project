import SearchBar from "./Searchbar"
import { useState } from "react"

function SearchPage(){
  const [moviesList, setMoviesList] = useState([])

  function onMoviesList(keyword){
    console.log("searching....")
  }

  return (
    <>
      <SearchBar onMoviesList={onMoviesList} />
    </>
  )
}

export default SearchPage