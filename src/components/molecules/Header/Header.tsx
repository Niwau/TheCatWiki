import { SearchBar } from "../../atoms/SearchBar/SearchBar"

export const Header = () => {
  return (
    <nav className="flex justify-between mx-40 mt-6 mb-16">
      <h1 className="font-medium text-xl">TheCatWiki</h1>
      <SearchBar/>
    </nav>
  )
}
