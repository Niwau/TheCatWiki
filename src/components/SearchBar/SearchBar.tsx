import { StyledSearchBar } from "./SearchBar.styles"
import { MagnifyingGlass } from "phosphor-react"
export const SearchBar = () => {
  return (
    <StyledSearchBar>
        <MagnifyingGlass />
        <input type="text" />
    </StyledSearchBar>
  )
}
