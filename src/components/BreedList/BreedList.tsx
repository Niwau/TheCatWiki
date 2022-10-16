import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Breed } from "../Breed/Breed";

interface BreedListProps {
    count: number
}

export const BreedList = ({ count } : BreedListProps) => {

    const data = useFetch(`https://api.thecatapi.com/v1/breeds?limit=${count}`)

    const breedList = data.map((breed) => (
      <Breed country={breed.origin} image={breed.image.url} name={breed.name} key={breed.id} pageUrl=""/>
    ))

    return (
      <React.Fragment>
        {breedList}
      </React.Fragment>
    )
        
}
