import React, { useEffect, useLayoutEffect,useState } from 'react'

const useIsMobile = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [window.innerWidth]);
    
    const isMobile = width <= 768;
    return{isMobile,width}
}


export default useIsMobile
