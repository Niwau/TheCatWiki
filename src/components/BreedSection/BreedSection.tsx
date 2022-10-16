import { ArrowRight } from "phosphor-react";
import { BreedList } from "../BreedList/BreedList";
import { StyledBreedSection } from "./BreedSection.styles"

export const BreedSection = () => {

  return (
    <StyledBreedSection id="breed-section">
      <h1>Some cool <span>breeds</span></h1>
      <div>
        <BreedList count={8}/>
      </div>
      <footer>
        <a href="">See more</a>
        <ArrowRight/>
      </footer>
    </StyledBreedSection>
  )
}
