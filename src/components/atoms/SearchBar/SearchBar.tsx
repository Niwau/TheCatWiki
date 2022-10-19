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
    <div className="relative">
      <main className="flex items-center">
        <input 
          className=" outline outline-1 pr-8 pl-2 py-1" 
          onChange={debouncedHandleChange} 
          onBlur={toggleModal} 
          onFocus={toggleModal}
        />
        <MagnifyingGlass className="text-xl absolute right-0 m-2"/>
      </main>
      {
        isOpen && searchResultList.length > 0 && 
        (
          <footer className="outline outline-1 px-4 py-2 absolute bg-white w-full">
            {searchResultList}
          </footer>
        )
      }
    </div>
  )

}
