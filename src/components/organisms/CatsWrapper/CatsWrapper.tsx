import { StyledCatsWrapper } from "./CatsWrapper.styles"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { APIContext } from "../../../context/APIContext"
import { Breed } from "../../molecules/Breed/Breed"

export const CatsWrapper = () => {

  const breeds = useContext(APIContext)
  const { page } = useParams()

  const start = parseInt(page!) * 10;
  const end = parseInt(page!) * 10 + 10;

  return (
    <StyledCatsWrapper>
      {
        breeds.slice(start, end)
        .map(breed => {
          return (
            <Breed 
              key={breed.id} 
              country={breed.origin} 
              image={breed.image?.url ?? '/CatNotExist.webp'} 
              name={breed.name} 
              pageUrl={`/cat/${breed.id}`}
            />
          )
        })
      }
    </StyledCatsWrapper>
  )
}
