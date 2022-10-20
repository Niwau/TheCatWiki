import { StyledBreed } from "./Breed.styles"

interface BreedProps {
    image: string
    name: string
    country: string
    pageUrl: string
}

export const Breed = (props : BreedProps) => {
  return (
    <StyledBreed href={props.pageUrl}>
        <img src={props.image}/>
        <blockquote>
            <h1>{props.name}</h1>
            <p>{props.country}</p>
        </blockquote>
    </StyledBreed>
  )
}
