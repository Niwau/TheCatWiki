import { useEffect, useState } from "react";
import { ApiResponse } from "../../../types/apiTypes";
import { getBreeds } from "../../../utils/api";
import { Breed } from "../Breed/Breed";

export const BreedList = ({ count } : { count: number }) => {

    const [breeds, setBreeds] = useState<ApiResponse | []>([]);

    useEffect(() => {
      getBreeds(count)
        .then(breeds => setBreeds(breeds))
    }, [])

    const breedList = breeds.map(breed => (
      <Breed 
        country={breed.origin} 
        image={breed.image.url} 
        name={breed.name} 
        key={breed.id} 
        pageUrl=""
      />
    ))

    return (
      <>
        {breedList}
      </>
    )
        
}
