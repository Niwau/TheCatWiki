import { Button } from "../Button/Button"
import { StyledHero } from "./Hero.styles"

export const Hero = () => {
  return (
    <StyledHero>
      <main>
        <h1>Find information about your favorite <span>cat breed</span></h1>
        <p>You can search for cat breeds to see pictures, images and other cool stuffs about cats.</p>
        <footer>
          <Button href="" variant="pink">Explore</Button>
          <Button href="" variant="white">Github</Button>
        </footer>
      </main>
      <img src="CatHero.jpg"/>
    </StyledHero>
  )
}
