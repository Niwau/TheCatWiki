import { ArrowRight } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { APIContext } from "../../../context/APIContext";
import { Breed } from "../../molecules/Breed/Breed";
import { StyledBreedSection } from "./BreedSection.styles"

export const BreedSection = () => {

  const breeds = useContext(APIContext)

  return (
    <StyledBreedSection id="breed-section">
      <h1>Some cool <span>breeds</span></h1>
      <div>
        {
          breeds.slice(0,8).map(breed =>
            <Breed 
              key={breed.id} 
              country={breed.origin} 
              image={breed.image?.url ?? '/CatNotExist.webp'} 
              name={breed.name} 
              pageUrl={`/cat/${breed.id}`}
            />
          )
        }
      </div>
      <footer>
        <Link to="/cats/0">See more</Link>
        <ArrowRight/>
      </footer>
    </StyledBreedSection>
  )
}
