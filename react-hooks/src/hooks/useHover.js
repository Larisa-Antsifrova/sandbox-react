import {useEffect, useState} from "react";

export default function useHover(ref){
const [isHovering, setIsHovering] = useState(false)

    const on = ()=> setIsHovering(true)
    const off = ()=> setIsHovering(false)

    useEffect(()=>{}, [])

    return isHovering
}
