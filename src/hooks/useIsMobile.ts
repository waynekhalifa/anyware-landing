import React, { useEffect, useLayoutEffect,useState } from 'react'

const useIsMobile = () => {
    const [width, setWidth] = useState<number>(1200);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    const isMobile = width <= 768;
    return{isMobile,width}
}


export default useIsMobile
