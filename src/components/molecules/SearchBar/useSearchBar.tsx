import { ChangeEvent, useContext, useEffect, useState } from "react";
import { APIContext } from "../../../context/APIContext";
import { useDebounce } from "../../../hooks/useDebounce";
import { Breeds } from "../../../types/api";
import { Badge } from "../Badge/Badge";

export function useSearchBar() {
  const [searchResult, setSearchResult] = useState<Breeds | []>([]);
  const [isOpen, setIsOpen] = useState(false);

  const breeds = useContext(APIContext);

  const changeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    const filtered = breeds.filter((breed) =>
      breed.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResult(filtered);
  };

  const handleChange = useDebounce(changeEvent, 1000);

  const searchResultList = searchResult.map((breed, index) => {
    return (
      <Badge
        key={breed.id}
        image={breed?.image?.url ?? "/CatNotExist.webp"}
        path={`/cat/${breed.id}`}
        country={breed.origin}
        name={breed.name}
      />
    );
  });

  const openCloseModal = () => {
    setIsOpen((prevState) => !prevState);
  }

  const toggleModal = useDebounce(openCloseModal, 500);

  return {
    isOpen,
    toggleModal,
    searchResultList,
    handleChange,
  };
}
