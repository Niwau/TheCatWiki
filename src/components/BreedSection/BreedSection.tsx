import { useEffect, useLayoutEffect, useState } from "react";
import { Breed } from "../Breed/Breed"
import { StyledBreedSection } from "./BreedSection.styles"

type breedResponse = [
  {
    origin: string,
    name: string,
    image: {
      url: string
    }
  }
]

export const BreedSection = () => {

  const [ breedList, setBreedList ] = useState<breedResponse | []>([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds?limit=8')
      .then(res => res.json())
      .then(breeds => setBreedList(breeds))
  }, [])

  const breedMap = breedList.map((breed, index) => {
    return (
      <Breed
        pageUrl=""
        country={breed.origin}
        image={breed.image.url}
        name={breed.name}
        key={index}
      />
    )
  })

  return (
    <StyledBreedSection>
      <h1>Some cool <span>breeds</span></h1>
      <div>
        { breedMap }
      </div>
    </StyledBreedSection>
  )
}
