import { StyledSearchBar } from "./SearchBar.styles"
import { MagnifyingGlass } from "phosphor-react"
import { useSearchBar } from "./useSearchBar"

export const SearchBar = () => {

  const { 
    debouncedHandleChange, 
    isOpen, 
    toggleModal, 
    searchResultList 
  } = useSearchBar()

  return (
    <StyledSearchBar>
      <div>
        <input type="text" onChange={debouncedHandleChange} onBlur={toggleModal} onFocus={toggleModal}/>
        <MagnifyingGlass />
      </div>
      {
        isOpen && searchResultList.length > 0 && 
        (
          <footer>{searchResultList}</footer>
        )
      }
    </StyledSearchBar>
  )

}
