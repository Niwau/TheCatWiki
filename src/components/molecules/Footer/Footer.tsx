import { GithubLogo } from "phosphor-react"
import { StyledFooter } from "./Footer.styles"

export const Footer = () => {
  return (
    <StyledFooter>
        <h1>TheCatWiki</h1>
        <a href="https://github.com/Niwau" target='_blank'><GithubLogo/></a>
    </StyledFooter>
  )
}
