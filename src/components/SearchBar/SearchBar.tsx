import { StyledSearchBar } from "./SearchBar.styles"
import { MagnifyingGlass } from "phosphor-react"
import { useState } from "react"

export const SearchBar = () => {

  const [inputValue, setInputValue] = useState('')

  return (
    <StyledSearchBar>
        <MagnifyingGlass />
        <input type="text" value={ inputValue } onChange={e => setInputValue(e.target.value)}/>
    </StyledSearchBar>
  )

}
