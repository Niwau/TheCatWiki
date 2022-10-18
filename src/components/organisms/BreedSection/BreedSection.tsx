import { ArrowRight } from "phosphor-react";
import { Link } from "react-router-dom";
import { BreedList } from "../../molecules/BreedList/BreedList";
import { StyledBreedSection } from "./BreedSection.styles"

export const BreedSection = () => {

  return (
    <StyledBreedSection id="breed-section">
      <h1>Some cool <span>breeds</span></h1>
      <div>
        <BreedList count={8}/>
      </div>
      <footer>
        <Link to="/cats">See more</Link>
        <ArrowRight/>
      </footer>
    </StyledBreedSection>
  )
}
