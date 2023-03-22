import {useCallback, useRef} from "react";

export default function  useDebounce(callback, delay){
    const timer = useRef()

    const debouncedCallback = useCallback(()=>{
        if(timer.current){
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(()=>{
            callback()
        }, delay)

        return debouncedCallback

    }, [callback, delay])
}