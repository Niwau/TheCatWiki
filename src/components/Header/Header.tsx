import { SearchBar } from "../SearchBar/SearchBar"
import { StyledHeader } from "./Header.styles"

export const Header = () => {
  return (
    <StyledHeader>
        <h1>TheCatWiki</h1>
        <SearchBar/>
    </StyledHeader>
  )
}
