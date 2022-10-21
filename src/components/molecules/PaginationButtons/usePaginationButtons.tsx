import { useContext } from "react"
import { APIContext } from "../../../context/APIContext"

export const usePaginationButtons = () => {
    const buttons = []
    const breeds = useContext(APIContext)
    const buttonsCount = Math.floor(breeds.length / 10)

    for(let i = 0; i <= buttonsCount; i++){
        buttons.push(`${i}`)
    }

    return buttons
}