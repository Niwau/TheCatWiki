import { ReactNode } from "react"

export const Card = ({ children, color } : { children : ReactNode, color: 'pink' | 'white' })  => {
  if(color == 'pink'){
    return (
      <div className="py-4 px-8 outline outline-1 outline-black hover:shadow-0.5 duration-300 bg-pink-400 text-white">
        { children }
      </div>
    )
  } else {
    return (
      <div className="py-4 px-8 outline outline-1 outline-black hover:shadow-0.5 duration-300">
        { children }
      </div>
    )
  }
}

