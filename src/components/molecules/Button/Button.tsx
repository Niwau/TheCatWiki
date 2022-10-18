import { StyledButton } from "./Button.styles"

interface ButtonProps {
  children: string,
  href: string,
  variant: 'pink' | 'white',
  target?: string
}

export const Button = ({ children, href, variant, target } : ButtonProps) => {
  return (
    <StyledButton href={href} variant={variant} target={target}>
      { children }
    </StyledButton>
  )
}
