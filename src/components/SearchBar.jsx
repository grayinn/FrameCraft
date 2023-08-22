import React, { useState } from "react"
import Header from "./Header"

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <div>
      <Header onSearch={handleSearch} searchQuery={searchQuery}/>
    </div>
  )
}

export default SearchBar
