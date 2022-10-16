import { useRef } from "react"

export const useDebounce = (fn : (...args : any) => any, delay: number) => {

    let timer = useRef(0)

    const debouncedFunction = (...args : any) => {

        clearTimeout(timer.current)

        timer.current = setTimeout(() => {
            fn(...args)
        }, delay)
    }

    return debouncedFunction
}