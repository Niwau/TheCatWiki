import { StyledSearchBar } from "./SearchBar.styles"
import { MagnifyingGlass } from "phosphor-react"
import { useSearchBar } from "./useSearchBar"

export const SearchBar = () => {

  const { 
    isOpen, 
    toggleModal, 
    searchResultList,
    handleChange
  } = useSearchBar()

  return (
    <StyledSearchBar>
      <div>
        <input type="text" onFocus={toggleModal} onBlur={toggleModal} onChange={handleChange}/>
        <MagnifyingGlass />
      </div>
      {
        isOpen && searchResultList.length > 0 && 
        (
          <footer >{searchResultList}</footer>
        )
      }
    </StyledSearchBar>
  )

}
