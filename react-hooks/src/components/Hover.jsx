import React, {useRef} from 'react';

const Hover = () => {
    const ref = useRef()

    return (
        <div ref={ref} style={{width: 300, height: 300, backgroundColor: 'tomato'}}>
            <button onClick={()=>console.log(ref)}>Click</button>
        </div>
    );
};

export default Hover;