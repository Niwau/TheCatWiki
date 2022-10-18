import { Link } from "react-router-dom"
import { SearchBar } from "../SearchBar/SearchBar"
import { StyledHeader } from "./Header.styles"

export const Header = () => {
  return (
    <StyledHeader>
        <Link to={'/'} >TheCatWiki</Link>
        <SearchBar/>
    </StyledHeader>
  )
}
