import { ChangeEvent, useCallback, useState } from "react"
import { useDebounce } from "../../../hooks/useDebounce"
import { ApiResponse } from "../../../types/api"
import { API_ENDPOINT } from "../../../utils/api"

export function useSearchBar() {
    const [searchResult, setSearchResult] = useState<ApiResponse | []>([])
    const [isOpen, setIsOpen] = useState(false)

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    fetch(`${API_ENDPOINT}/breeds/search?q=${event.target.value}`)
        .then(res => res.json())
        .then(json => setSearchResult(json))
    }

    const searchResultList = searchResult.map((breed) => {
        return (
            <h3 key={breed.id}>{breed.name}</h3>  
        )
    })

    const toggleModal = () => {
        setIsOpen(prevState => !prevState)
    }

    const debouncedHandleChange = useCallback(useDebounce(handleChange, 1000), [])

    return { 
        isOpen, 
        debouncedHandleChange,
        toggleModal,
        searchResultList
    }
}
