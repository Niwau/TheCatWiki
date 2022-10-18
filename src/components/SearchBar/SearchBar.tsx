import { StyledSearchBar } from "./SearchBar.styles"
import { MagnifyingGlass } from "phosphor-react"
import { ChangeEvent, useCallback, useState } from "react"
import { useDebounce } from "../../hooks/useDebounce"

type SearchResultType = [
  {
    id: string,
    name: string
  }
]

export const SearchBar = () => {

  const [searchResult, setSearchResult] = useState<SearchResultType | []>([])
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    fetch(`https://api.thecatapi.com/v1/breeds/search?q=${event.target.value}`)
      .then(res => res.json())
      .then(json => setSearchResult(json))
  }

  const handleBlur = () => {
    setIsFocused(false)
  }
  
  const handleFocus = () => {
    setIsFocused(true)
  }

  const debouncedHandleChange = useCallback(useDebounce(handleChange, 1000), [])

  const searchResultList = searchResult.map(item => <h3 key={item.id}>{item.name}</h3>)
  
  return (
    <StyledSearchBar>
      <div>
        <input type="text" onChange={debouncedHandleChange} onBlur={handleBlur} onFocus={handleFocus}/>
        <MagnifyingGlass />
      </div>
      {(searchResult.length > 0 && isFocused) ? <footer>{searchResultList}</footer> : <></>}
    </StyledSearchBar>
  )

}
