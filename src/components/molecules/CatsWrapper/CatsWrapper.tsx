import { StyledCatsWrapper } from "./CatsWrapper.styles"
import { ReactNode } from "react"

export const CatsWrapper = ({ children } : { children: ReactNode}) => {
  return (
    <StyledCatsWrapper>
        {children}
    </StyledCatsWrapper>
  )
}
