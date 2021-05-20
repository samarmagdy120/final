import React, { useEffect, useState } from 'react'
import './ScrollToTop.css'
import {useWindowScroll} from 'react-use'

const ScrollToTop = () => {
    const {y: pageYOffset} = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset > 150){
            setVisiblity(true);
        }else{
            setVisiblity(false);
        }
    }, [pageYOffset]);

    const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

    if(!visible){
        return false;
    }


    return (
        <div className="scroll-to-top" onClick={scrollTop}>
            <i class="fa fa-arrow-up"></i>
        </div>
    );
};

export default ScrollToTop
