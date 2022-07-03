import { useState } from "react"
import { Alert, InputGroup, FormControl, Button } from "react-bootstrap"

function SearchBar({ onMoviesList }) {
  const [search, setSearch] = useState("")
  const [showError, setShowError] = useState(false)

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  function onSearch() {
    if (search.length > 0) {
      onMoviesList(search)
    } else {
      setShowError(true)
    }
  }

  return (
    <>
      <InputGroup style={{marginTop: "110px", marginBottom: "30px"}} className="mb-3">
        <FormControl
          placeholder="Enter movie title..."
          aria-describedby="basic-addon2"
          value={search}
          onChange={handleSearchChange}
        />
        <Button onClick={() => onSearch()} variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
      {showError ? (
        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Please enter a movie name and try again.
          </p>
        </Alert>
      ) : null}
    </>
  )
}

export default SearchBar