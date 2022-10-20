import { Link } from "react-router-dom"
import { SearchBar } from "../../atoms/SearchBar/SearchBar"

export const Header = () => {
  return (
    <nav className="flex justify-between mx-40 mt-6 mb-16">
      <Link to={'/'} className="font-medium text-xl">TheCatWiki</Link>
      <SearchBar/>
    </nav>
  )
}
