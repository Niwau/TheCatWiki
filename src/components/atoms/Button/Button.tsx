import { StyledButton } from "./Button.styles"

export interface ButtonProps {
  children: string,
  href: string,
  variant: 'primary' | 'secondary',
  target?: string
}

export const Button = (props : ButtonProps) => {
  return (
    <StyledButton {...props}>
      { props.children }
    </StyledButton>
  )
}
