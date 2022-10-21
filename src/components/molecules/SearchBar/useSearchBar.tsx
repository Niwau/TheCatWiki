import { ChangeEvent, useCallback, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import { Breeds } from "../../../types/api";
import { API_ENDPOINT } from "../../../utils/api";
import { Badge } from "../Badge/Badge";

export function useSearchBar() {
  const [searchResult, setSearchResult] = useState<Breeds | []>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    fetch(`${API_ENDPOINT}/breeds/search?q=${event.target.value}`)
      .then((res) => res.json())
      .then((json) => setSearchResult(json));
  };

  const searchResultList = searchResult.map((breed) => {
    return (
      <>
				<Badge
        key={breed.id}
        image={breed?.image?.url ?? "/CatNotExist.webp"}
        path={`/cat/${breed.id}`}
				country={breed.origin}
				name={breed.name}
      />
			<hr />
			</>
    );
  });

  const toggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  const debouncedHandleChange = useCallback(
    useDebounce(handleChange, 1000),
    []
  );

  return {
    isOpen,
    debouncedHandleChange,
    toggleModal,
    searchResultList,
  };
}
