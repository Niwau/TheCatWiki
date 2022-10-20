import { ArrowRight } from "phosphor-react";
import { Link, useLoaderData } from "react-router-dom";
import { ApiResponse } from "../../../types/apiTypes";
import { breedList } from "../../../utils/breedList";
import { StyledBreedSection } from "./BreedSection.styles"

export const BreedSection = () => {

  const breeds = useLoaderData() as ApiResponse

  return (
    <StyledBreedSection id="breed-section">
      <h1>Some cool <span>breeds</span></h1>
      <div>
        {breedList(breeds)}
      </div>
      <footer>
        <Link to="/cats/0">See more</Link>
        <ArrowRight/>
      </footer>
    </StyledBreedSection>
  )
}
