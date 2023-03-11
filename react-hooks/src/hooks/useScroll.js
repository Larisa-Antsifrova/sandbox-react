import {useEffect, useRef} from "react";

export default function useScroll(parentRef, childRef, callback){
const observer = useRef()

    useEffect(()=>{
        const options = {
            root: parentRef.current,
            rootMargin: "0px",
            threshold: 0,
        };
    }, [])
}
