import { ApiResponse } from "../types/apiTypes";
import { Breed } from "../components/molecules/Breed/Breed";

export const breedList = ( breeds : ApiResponse) => {

  return (
    breeds.map(breed => (
      <Breed 
        country={breed.origin} 
        image={breed.image.url} 
        name={breed.name} 
        key={breed.id} 
        pageUrl=""
      />
    ))
  )
        
}
