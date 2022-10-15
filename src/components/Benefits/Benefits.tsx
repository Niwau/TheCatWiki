import { Card } from "../Card/Card"
import { StyledBenefits } from "./Benefits.styles"

export const Benefits = () => {
  return (
    <StyledBenefits>
       <blockquote>
            <h1>Why should you <span>adopt a cat ?</span></h1>
            <p>According to Research Gate, owning a cat, or any pet you adopt from a shelter, has been shown to have positive effects on humans' ability to cope with stress, anxiety, depression, and loneliness. Taking a cat home from a shelter can improve your sense of happiness and general well-being.</p>
       </blockquote>
       <footer>
        <Card variant='pink'>
          <h1>You will change their life</h1>
          <p>More than change this cat’s life, you give them life. And you get a new best friend.</p>
        </Card>
        <Card variant='white'>
          <h1>You will get a <span>great friend</span></h1>
          <p>You could find a playful, active cat or a calmer feline who prefers cuddling and a quieter environment.</p>
        </Card>
        <Card variant='white'>
          <h1>Heart <span>Healthy</span></h1>
          <p>A rescue cat or pet can be heart-healthy as well.  Cats can relieve stress and lower blood pressure.</p>
        </Card>

       </footer>
    </StyledBenefits>
  )
}
