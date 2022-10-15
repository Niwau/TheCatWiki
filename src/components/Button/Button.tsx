import { StyledButton } from "./Button.styles"

interface ButtonProps {
  children: string,
  href: string,
  variant: 'pink' | 'white'
}

export const Button = ({ children, href, variant } : ButtonProps) => {
  return (
    <StyledButton href={href} variant={variant}>
      { children }
    </StyledButton>
  )
}
