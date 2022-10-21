import { Button } from "../../atoms/Button/Button"
import { StyledHero } from "./Hero.styles"

export const Hero = () => {
  return (
    <StyledHero>
      <main>
        <h1>Find information about your favorite <span>cat breed</span></h1>
        <p>You can search for cat breeds to see pictures, images and other cool stuffs about cats.</p>
        <footer>
          <Button href="#breed-section" variant="primary">Explore</Button>
          <Button href="https://github.com/Niwau" variant="secondary" target="_blank">Github</Button>
        </footer>
      </main>
      <img src="CatHero.jpg"/>
    </StyledHero>
  )
}
