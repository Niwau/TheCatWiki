import { ReactNode } from 'react'
import { StyledCard } from './Card.styles'

interface CardProps {
    children: ReactNode
    variant: 'pink' | 'white'
}

export const Card = ({ children, variant } : CardProps) => {
  return (
    <StyledCard variant={variant}>
        { children }
    </StyledCard>
  )
}
