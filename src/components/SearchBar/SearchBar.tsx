import { StyledSearchBar } from "./SearchBar.styles"
import { MagnifyingGlass } from "phosphor-react"
import { ChangeEvent, useCallback, useState } from "react"
import { useDebounce } from "../../hooks/useDebounce"
import { ApiResponse } from "../../types/apiTypes"
import { API_ENDPOINT } from "../../utils/api"

export const SearchBar = () => {

  const [searchResult, setSearchResult] = useState<ApiResponse | []>([])
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    fetch(`${API_ENDPOINT}/breeds/search?q=${event.target.value}`)
      .then(res => res.json())
      .then(json => setSearchResult(json))
  }

  const openCloseModal = () => setIsFocused(prevState => !prevState)

  const debouncedHandleChange = useCallback(useDebounce(handleChange, 1000), [])

  const searchResultList = searchResult.map(item => <h3 key={item.id}>{item.name}</h3>)
  
  return (
    <StyledSearchBar>
      <div>
        <input type="text" onChange={debouncedHandleChange} onBlur={openCloseModal} onFocus={openCloseModal}/>
        <MagnifyingGlass />
      </div>
      {(searchResult.length > 0 && isFocused) && <footer>{searchResultList}</footer>}
    </StyledSearchBar>
  )

}
