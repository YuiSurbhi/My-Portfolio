import LocomotiveScroll from 'locomotive-scroll'
import React, { useEffect, useRef } from 'react'
import "locomotive-scroll/dist/locomotive-scroll.css"

const ScrollContainer = ({ children }) => {
    const scrollRef = useRef(null)

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            getDirection: true,
            getSpeed: true
        })

        setTimeout(() => {
            scroll.current();
        }, 1000);

        return () => {
            scroll.destroy()
        }
    }, [])

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  )
}

export default ScrollContainer
